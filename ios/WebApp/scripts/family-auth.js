import { SUPABASE_CONFIG } from './supabase-config.js';

/* ============================================================================
   Семейная синхронизация.

   Правила, на которых всё держится:
   1. Синхронизируются ДАННЫЕ, а не настройки интерфейса. Тема, текущий экран,
      свёрнутые категории и активный ребёнок остаются на устройстве.
   2. Запись в базу идёт пачками с задержкой — а не на каждое нажатие клавиши.
   3. Чужие изменения применяются точечно, без перезагрузки страницы.
   4. При слиянии данные объединяются, а не затираются «кто последний, тот и прав».
   ========================================================================== */

/* Точная версия клиента. Сначала пробуем локальную копию (scripts/vendor/
   supabase.js — см. npm run vendor), и только если её нет — CDN. */
const VENDOR_MODULE = './vendor/supabase.js';
const CDN_MODULE = 'https://esm.sh/@supabase/supabase-js@2';

const PUSH_DELAY = 700;          // мс, склейка частых правок в один запрос
const REFRESH_DELAY = 250;       // мс, склейка перерисовок
const MAX_VALUE_BYTES = 200000;  // совпадает с ограничением в схеме БД

/* ---------- какие ключи уезжают в семью ---------- */
/* Синхронизируем всё «prikorm-*», кроме настроек конкретного устройства. */
const DEVICE_ONLY = new Set([
  'prikorm-theme',      // тёмная тема — личное дело устройства
  'prikorm-view',       // открытый раздел
  'prikorm-sound',      // звуки
  'prikorm-active-v1'   // какой ребёнок выбран на этом телефоне
]);
const isOpenStateKey = key => /(^|[-_])open([-_]|$)/.test(key);

export const appKey = key =>
  typeof key === 'string' &&
  key.startsWith('prikorm-') &&
  !DEVICE_ONLY.has(key) &&
  !isOpenStateKey(key);

const esc = value => String(value || '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const notify = message => typeof window.toast === 'function' ? window.toast(message) : alert(message);

let supabase = null;
let session = null;
let familyId = null;
let membership = null;
let patchedStorage = false;
let originalSetItem = null;
let suppressSync = false;
let realtime = null;

/* ---------- очередь отправки ---------- */
const pending = new Map();
let flushTimer = null;
let flushing = false;

function currentOrigin() { return `${location.origin}${location.pathname}`; }
function getInviteToken() { return new URLSearchParams(location.search).get('invite'); }

function setStatus(text, tone = '') {
  document.querySelectorAll('[data-family-status]').forEach(el => {
    el.textContent = text;
    el.className = `family-status ${tone}`;
  });
}

/* ============================ слияние данных ============================= */

function parseJson(raw) {
  try { return JSON.parse(raw); } catch (error) { return undefined; }
}
function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}
function hasIds(list) {
  return Array.isArray(list) && list.length > 0 && list.every(item => item && typeof item === 'object' && 'id' in item);
}

function mergeParsed(local, remote, depth) {
  if (local === undefined) return remote;
  if (remote === undefined) return local;

  /* Списки записей с id (дети, свои продукты, события дневника)
     объединяем по id, а не заменяем целиком. */
  if (hasIds(local) && hasIds(remote)) {
    const byId = new Map(local.map(item => [item.id, item]));
    remote.forEach(item => byId.set(item.id, { ...(byId.get(item.id) || {}), ...item }));
    return [...byId.values()];
  }

  if (isPlainObject(local) && isPlainObject(remote) && depth < 3) {
    const merged = { ...local };
    Object.keys(remote).forEach(key => {
      merged[key] = key in local ? mergeParsed(local[key], remote[key], depth + 1) : remote[key];
    });
    return merged;
  }

  return remote;
}

/**
 * Объединяет локальное и удалённое значение одного ключа.
 *
 * Справочники отметок, заметок и дат объединяются по ключам — так не теряются
 * отметки, когда двое родителей отмечают одновременно. Дневник дня объединяется
 * на уровне отдельных записей: кормление, добавленное мамой, и сон, добавленный
 * папой в тот же день, остаются оба.
 *
 * Компромисс: объединение может «воскресить» снятую галочку, если её сняли на
 * одном устройстве, пока второе было офлайн. Потерять одну галочку менее
 * болезненно, чем потерять полсотни, поэтому выбран именно этот вариант.
 */
export function mergeValues(localRaw, remoteRaw) {
  if (localRaw == null || localRaw === '') return remoteRaw;
  if (remoteRaw == null || remoteRaw === '') return localRaw;
  if (localRaw === remoteRaw) return localRaw;

  const local = parseJson(localRaw);
  const remote = parseJson(remoteRaw);
  if (local === undefined || remote === undefined) return remoteRaw;

  return JSON.stringify(mergeParsed(local, remote, 0));
}

/* ============================ применение данных ========================== */

const changedKeys = new Set();
let refreshTimer = null;

function announce(key) {
  if (key) changedKeys.add(key);
  clearTimeout(refreshTimer);
  refreshTimer = setTimeout(() => {
    const keys = [...changedKeys];
    changedKeys.clear();
    window.dispatchEvent(new CustomEvent('family-sync', { detail: { keys } }));
  }, REFRESH_DELAY);
}

function writeLocal(key, value) {
  suppressSync = true;
  try {
    (originalSetItem || Storage.prototype.setItem).call(localStorage, key, value);
  } catch (error) {
    notify('Не хватает места на устройстве — часть данных семьи не сохранилась');
  } finally {
    suppressSync = false;
  }
}

/* ============================== отправка ================================= */

function queuePush(key, value) {
  if (!familyId || suppressSync || !appKey(key)) return;
  const text = value == null ? '' : String(value);
  if (text.length > MAX_VALUE_BYTES) {
    setStatus('Запись слишком большая — не синхронизирована', 'error');
    return;
  }
  pending.set(key, text);
  setStatus('Сохраняем…');
  scheduleFlush();
}

function scheduleFlush() {
  clearTimeout(flushTimer);
  flushTimer = setTimeout(() => { flush(); }, PUSH_DELAY);
}

async function flush() {
  if (flushing || !pending.size || !familyId || !session) return;
  flushing = true;
  const batch = [...pending];
  pending.clear();
  const rows = batch.map(([storage_key, value]) => ({
    family_id: familyId, storage_key, value, updated_by: session.user.id
  }));
  try {
    const { error } = await supabase.from('app_state').upsert(rows, { onConflict: 'family_id,storage_key' });
    if (error) throw error;
    setStatus('Синхронизировано', 'ok');
  } catch (error) {
    /* возвращаем в очередь то, что не успели перезаписать более свежими правками */
    batch.forEach(([key, value]) => { if (!pending.has(key)) pending.set(key, value); });
    setStatus(navigator.onLine ? 'Не удалось синхронизировать' : 'Нет сети — сохраним позже', 'error');
  } finally {
    flushing = false;
    if (pending.size) scheduleFlush();
  }
}

function flushNow() {
  clearTimeout(flushTimer);
  if (pending.size) flush();
}

window.addEventListener('pagehide', flushNow);
window.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flushNow(); });
window.addEventListener('online', () => { if (pending.size) flush(); });

function patchStorage() {
  if (patchedStorage) return;
  patchedStorage = true;
  originalSetItem = Storage.prototype.setItem;
  Storage.prototype.setItem = function(key, value) {
    const result = originalSetItem.call(this, key, value);
    if (this === localStorage && session && !suppressSync) queuePush(String(key), String(value));
    return result;
  };
}

/* ============================== загрузка ================================= */

function localSnapshot() {
  const data = {};
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    if (key && appKey(key)) data[key] = localStorage.getItem(key);
  }
  return data;
}

async function pullRemoteData() {
  const { data, error } = await supabase.from('app_state').select('storage_key, value').eq('family_id', familyId);
  if (error) throw error;
  if (!data?.length) return false;

  const pushBack = [];
  data.forEach(row => {
    if (!appKey(row.storage_key)) return;
    const local = localStorage.getItem(row.storage_key);
    const merged = mergeValues(local, row.value);
    if (merged !== local) writeLocal(row.storage_key, merged);
    /* локальное содержало то, чего нет в базе — вернём объединённое обратно */
    if (merged !== row.value) pushBack.push(row.storage_key);
  });

  pushBack.forEach(key => pending.set(key, localStorage.getItem(key) || ''));
  if (pending.size) scheduleFlush();

  announce();               // просим приложение перечитать хранилище и перерисоваться
  return true;
}

async function importLocalData() {
  const snapshot = localSnapshot();
  const rows = Object.entries(snapshot).map(([storage_key, value]) => ({
    family_id: familyId, storage_key, value: value ?? '', updated_by: session.user.id
  }));
  if (!rows.length) return;
  const { error } = await supabase.from('app_state').upsert(rows, { onConflict: 'family_id,storage_key' });
  if (error) throw error;
  localStorage.setItem('mama-sync-imported-family', familyId);
}

async function subscribeRealtime() {
  if (realtime) { try { await supabase.removeChannel(realtime); } catch (error) { /* канал уже закрыт */ } }
  realtime = supabase
    .channel(`family-state-${familyId}`)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'app_state', filter: `family_id=eq.${familyId}` }, payload => {
      const row = payload.new;
      if (!row || !appKey(row.storage_key)) return;
      /* Своё же эхо (в том числе со второго устройства того же аккаунта)
         узнаём по совпадению значения, а не по updated_by. */
      if (localStorage.getItem(row.storage_key) === row.value) return;
      writeLocal(row.storage_key, row.value);
      announce(row.storage_key);
      setStatus('Обновлено семьёй', 'ok');
    })
    .subscribe();
}

async function syncFamily() {
  patchStorage();
  const remoteExists = await pullRemoteData();
  const importedFor = localStorage.getItem('mama-sync-imported-family');
  if (!remoteExists && importedFor !== familyId && Object.keys(localSnapshot()).length) {
    window.setTimeout(() => openImportPrompt(), 150);
  }
  await subscribeRealtime();
  setStatus('Синхронизировано', 'ok');
}

/* ================================ UI ===================================== */

function updateAccountControls() {
  const signedIn = Boolean(session);
  const profile = document.getElementById('profileBtn');
  if (profile) {
    profile.classList.toggle('is-signed-in', signedIn);
    profile.setAttribute('aria-label', signedIn ? 'Профиль и семья' : 'Войти или зарегистрироваться');
    profile.setAttribute('title', signedIn ? 'Профиль и семья' : 'Войти или зарегистрироваться');
  }
  document.querySelectorAll('[data-family-entry]').forEach(button => {
    const label = button.querySelector('span:not(:first-child)');
    const hint = button.querySelector('small');
    if (label) label.textContent = signedIn ? 'Моя семья' : 'Регистрация · вход';
    if (hint) hint.textContent = signedIn ? 'участники и синхронизация' : 'сохранить данные семьи';
    button.setAttribute('aria-label', signedIn ? 'Моя семья' : 'Регистрация и вход');
  });
}

function openMenuAccount() {
  document.getElementById('drawer')?.classList.remove('open');
  document.getElementById('drawerBackdrop')?.classList.remove('open');
  if (session) return openFamily();
  openAuth('register');
}

function bindAccountControls() {
  document.getElementById('profileBtn')?.addEventListener('click', openAccount);
  document.querySelectorAll('[data-family-entry]').forEach(button => button.addEventListener('click', event => {
    event.stopPropagation();
    openMenuAccount();
  }));
  updateAccountControls();
}

function addAccountButton() {
  const hub = document.getElementById('homeHub');
  const top = hub?.querySelector('.htop');
  if (!top || top.querySelector('[data-family-account]')) return;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'tbtn family-account-button';
  button.dataset.familyAccount = '1';
  button.setAttribute('aria-label', 'Аккаунт и семья');
  button.textContent = '👤';
  button.addEventListener('click', event => {
    event.stopPropagation();
    openAccount();
  });
  top.appendChild(button);
  updateAccountControls();
}

function observeHub() {
  addAccountButton();
  new MutationObserver(addAccountButton).observe(document.body, { childList: true, subtree: true });
}

/* Модалка с возвратом фокуса и ловушкой Tab. */
function openModal(title, content) {
  document.getElementById('familyModal')?.remove();
  const opener = document.activeElement;
  const modal = document.createElement('div');
  modal.id = 'familyModal';
  modal.innerHTML = `<div class="family-modal-backdrop"></div><section class="family-modal-card" role="dialog" aria-modal="true" aria-label="${esc(title)}"><div class="family-modal-head"><h2>${esc(title)}</h2><button type="button" class="family-close" aria-label="Закрыть">×</button></div><div class="family-modal-body">${content}</div></section>`;
  document.body.appendChild(modal);

  const close = () => {
    modal.remove();
    document.removeEventListener('keydown', onKey, true);
    if (opener && typeof opener.focus === 'function') opener.focus();
  };
  const focusable = () => [...modal.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea, select, [tabindex]:not([tabindex="-1"])')];
  const onKey = event => {
    if (!document.body.contains(modal)) return;
    if (event.key === 'Escape') { event.stopPropagation(); close(); return; }
    if (event.key !== 'Tab') return;
    const items = focusable();
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };

  document.addEventListener('keydown', onKey, true);
  modal.querySelector('.family-close').addEventListener('click', close);
  modal.querySelector('.family-modal-backdrop').addEventListener('click', close);
  modal.close = close;
  setTimeout(() => { (focusable()[1] || focusable()[0])?.focus(); }, 30);
  return modal;
}

function configurationNotice() {
  return `<div class="family-note"><b>Тестовый режим ещё не подключён.</b><br>Добавьте URL и publishable anon key проекта в <code>scripts/supabase-config.js</code>. Пароли и служебные ключи в сайт не добавляются.</div>`;
}

const isConfigured = () => /^https:\/\//.test(SUPABASE_CONFIG.url) && SUPABASE_CONFIG.anonKey.length > 20;

function openAccount() {
  if (!isConfigured()) {
    openModal('Аккаунт и семья', `${configurationNotice()}<p class="family-muted">Интерфейс уже готов, но регистрация появится после подключения тестового Supabase-проекта.</p>`);
    return;
  }
  if (!supabase) {
    openModal('Аккаунт и семья', '<p class="family-muted">Синхронизация недоступна офлайн. Данные сохраняются на устройстве — подключитесь к сети и откройте раздел снова.</p>');
    return;
  }
  if (session) return openFamily();
  openAuth('login');
}

function openAuth(mode) {
  const isRegister = mode === 'register';
  const modal = openModal(isRegister ? 'Создать аккаунт' : 'Войти', `
    <form id="familyAuthForm" class="family-form">
      <label>Email<input name="email" type="email" autocomplete="email" required></label>
      <label>Пароль<input name="password" type="password" autocomplete="${isRegister ? 'new-password' : 'current-password'}" minlength="8" required></label>
      <p class="family-muted">Пароль — минимум 8 символов.</p>
      <button class="family-primary" type="submit">${isRegister ? 'Создать аккаунт' : 'Войти'}</button>
    </form>
    <div class="family-actions">
      <button type="button" data-auth-switch>${isRegister ? 'У меня уже есть аккаунт' : 'Создать аккаунт'}</button>
      ${isRegister ? '' : '<button type="button" data-auth-reset>Не помню пароль</button>'}
    </div>`);
  const form = modal.querySelector('#familyAuthForm');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const submit = form.querySelector('button[type="submit"]');
    submit.disabled = true;
    try {
      const email = form.email.value.trim().toLowerCase();
      const password = form.password.value;
      const result = isRegister
        ? await supabase.auth.signUp({ email, password, options: { emailRedirectTo: currentOrigin() } })
        : await supabase.auth.signInWithPassword({ email, password });
      if (result.error) { notify(result.error.message); return; }
      if (isRegister && !result.data.session) {
        notify('Письмо с подтверждением отправлено. Подтвердите email и войдите в аккаунт.');
      }
      modal.close();
    } finally {
      submit.disabled = false;
    }
  });
  modal.querySelector('[data-auth-switch]').addEventListener('click', () => openAuth(isRegister ? 'login' : 'register'));
  modal.querySelector('[data-auth-reset]')?.addEventListener('click', () => openReset());
}

function openReset() {
  const modal = openModal('Восстановить пароль', `<form id="familyResetForm" class="family-form"><label>Email<input name="email" type="email" autocomplete="email" required></label><button class="family-primary" type="submit">Отправить ссылку</button></form>`);
  modal.querySelector('form').addEventListener('submit', async event => {
    event.preventDefault();
    const { error } = await supabase.auth.resetPasswordForEmail(event.currentTarget.email.value.trim(), { redirectTo: currentOrigin() });
    if (error) return notify(error.message);
    notify('Если аккаунт существует, письмо для смены пароля уже отправлено.');
    modal.close();
  });
}

function openImportPrompt() {
  const modal = openModal('Перенести данные в семью?', `<p>На этом устройстве уже есть записи. Перенесём их в общее семейное пространство? Локальная копия останется на устройстве.</p><div class="family-modal-buttons"><button type="button" class="family-primary" data-import>Перенести данные</button><button type="button" data-later>Позже</button></div>`);
  modal.querySelector('[data-import]').addEventListener('click', async () => {
    try { await importLocalData(); notify('Данные перенесены в семейное пространство'); modal.close(); }
    catch (error) { notify(error.message); }
  });
  modal.querySelector('[data-later]').addEventListener('click', () => modal.close());
}

/* Понятное сообщение, если схема базы ещё не обновлена. */
function rpcError(error) {
  const message = String(error?.message || error);
  if (/function .* does not exist|schema cache/i.test(message)) {
    return 'В базе не хватает новых функций. Выполните supabase/schema.sql в SQL Editor проекта.';
  }
  return message;
}

async function openFamily() {
  const { data: family } = await supabase.from('families').select('name, owner_id').eq('id', familyId).single();
  const { data: members } = await supabase.from('family_members').select('user_id, role, profiles(display_name)').eq('family_id', familyId).order('created_at');
  const isOwner = family?.owner_id === session.user.id;

  const list = (members || []).map(member => {
    const name = esc(member.profiles?.display_name || (member.user_id === session.user.id ? session.user.email : 'Участник'));
    const role = member.role === 'owner' ? 'Владелец' : 'Редактор';
    const canRemove = isOwner && member.user_id !== session.user.id;
    return `<li><span>${name}</span><b>${role}</b>${canRemove ? `<button type="button" class="family-member-remove" data-remove="${esc(member.user_id)}" aria-label="Убрать участника">Убрать</button>` : ''}</li>`;
  }).join('');

  const modal = openModal('Моя семья', `
    <div class="family-summary"><b>${esc(family?.name || 'Наша семья')}</b><span data-family-status class="family-status ok">Синхронизировано</span></div>
    <p class="family-muted">${esc(session.user.email)}</p>
    <h3>Участники</h3><ul class="family-members">${list}</ul>
    ${isOwner ? '<button class="family-primary" type="button" data-invite>Пригласить близкого</button>' : ''}
    <button type="button" class="family-secondary" data-import-local>Перенести данные этого устройства</button>
    <button type="button" class="family-secondary" data-export>Скачать все семейные данные</button>
    ${isOwner
      ? '<button type="button" class="family-danger" data-wipe>Удалить данные семьи с сервера</button>'
      : '<button type="button" class="family-danger" data-leave>Выйти из семьи</button>'}
    <button type="button" class="family-danger" data-sign-out>Выйти из аккаунта</button>`);

  modal.querySelector('[data-invite]')?.addEventListener('click', openInvite);

  modal.querySelector('[data-import-local]').addEventListener('click', async () => {
    try { await importLocalData(); notify('Данные синхронизированы'); }
    catch (error) { notify(error.message); }
  });

  modal.querySelector('[data-export]').addEventListener('click', async () => {
    try {
      const { data, error } = await supabase.from('app_state').select('storage_key, value, updated_at').eq('family_id', familyId);
      if (error) throw error;
      const payload = { app: 'prikorm', version: 2, exportedAt: new Date().toISOString(), data: Object.fromEntries((data || []).map(row => [row.storage_key, row.value])) };
      const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'prikorm-family-backup.json';
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      notify('Файл с данными семьи скачан');
    } catch (error) { notify(rpcError(error)); }
  });

  modal.querySelectorAll('[data-remove]').forEach(button => button.addEventListener('click', async () => {
    if (!confirm('Убрать участника из семьи? Он потеряет доступ к общим данным.')) return;
    const { error } = await supabase.rpc('remove_family_member', { member_id: button.dataset.remove });
    if (error) return notify(rpcError(error));
    notify('Участник убран из семьи');
    modal.close();
  }));

  modal.querySelector('[data-leave]')?.addEventListener('click', async () => {
    if (!confirm('Выйти из семьи? Данные на этом устройстве останутся, доступ к общим — пропадёт.')) return;
    const { error } = await supabase.rpc('leave_family');
    if (error) return notify(rpcError(error));
    notify('Вы вышли из семьи');
    modal.close();
    location.reload();
  });

  modal.querySelector('[data-wipe]')?.addEventListener('click', async () => {
    if (!confirm('Удалить все данные семьи с сервера? На устройствах копии останутся. Отменить нельзя.')) return;
    if (!confirm('Точно удалить? Это необратимо.')) return;
    const { error } = await supabase.rpc('delete_family_data');
    if (error) return notify(rpcError(error));
    notify('Данные семьи удалены с сервера');
    modal.close();
  });

  modal.querySelector('[data-sign-out]').addEventListener('click', async () => {
    flushNow();
    await supabase.auth.signOut();
    modal.close();
  });
}

async function makeToken() {
  const bytes = new Uint8Array(24);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
}

function openInvite() {
  const modal = openModal('Пригласить в семью', `<form id="familyInviteForm" class="family-form"><label>Email — необязательно для ссылки<input name="email" type="email" autocomplete="email" placeholder="grandma@example.com"></label><p class="family-muted">По email откроется готовое письмо. Ссылку можно отправить в мессенджере. Приглашение действует 7 дней.</p><button class="family-primary" type="submit">Создать приглашение</button></form><div id="familyInviteResult"></div>`);
  modal.querySelector('form').addEventListener('submit', async event => {
    event.preventDefault();
    try {
      const token = await makeToken();
      const email = event.currentTarget.email.value.trim().toLowerCase();
      const { error } = await supabase.rpc('create_family_invitation', { invited_email: email || null, raw_token: token });
      if (error) throw error;
      const url = `${currentOrigin()}?invite=${encodeURIComponent(token)}`;
      const result = modal.querySelector('#familyInviteResult');
      result.innerHTML = `<label>Ссылка-приглашение<input readonly value="${esc(url)}"></label><div class="family-modal-buttons"><button type="button" data-copy>Скопировать ссылку</button>${email ? '<button type="button" data-email>Открыть письмо</button>' : ''}</div>`;
      result.querySelector('[data-copy]').addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(url); notify('Ссылка скопирована'); }
        catch (copyError) { notify('Скопируйте ссылку вручную'); }
      });
      result.querySelector('[data-email]')?.addEventListener('click', () => {
        location.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent('Приглашение в Мама рядом')}&body=${encodeURIComponent(`Присоединяйся к нашей семье в приложении: ${url}`)}`;
      });
    } catch (error) { notify(rpcError(error)); }
  });
}

async function ensureFamily() {
  const { data: memberships, error } = await supabase
    .from('family_members')
    .select('family_id, role, families(name)')
    .eq('user_id', session.user.id)
    .limit(1);
  if (error) throw error;
  if (memberships?.length) {
    familyId = memberships[0].family_id;
    membership = memberships[0];
    return membership;
  }
  const { data, error: createError } = await supabase.rpc('create_family', { family_name: 'Наша семья' });
  if (createError) throw createError;
  familyId = data;
  membership = { family_id: data, role: 'owner', families: { name: 'Наша семья' } };
  return membership;
}

async function acceptInvite() {
  const token = getInviteToken();
  if (!token || !session) return;
  const { error } = await supabase.rpc('accept_family_invitation', { raw_token: token });
  const url = new URL(location.href);
  url.searchParams.delete('invite');
  history.replaceState({}, '', url.toString());
  if (error) return notify(rpcError(error));
  notify('Вы присоединились к семье 🎉');
}

async function onSession(nextSession) {
  session = nextSession;
  updateAccountControls();
  addAccountButton();
  if (!session) {
    familyId = null;
    membership = null;
    if (realtime) { try { await supabase.removeChannel(realtime); } catch (error) { /* уже закрыт */ } realtime = null; }
    setStatus('Локальный режим');
    return;
  }
  try {
    await acceptInvite();
    await ensureFamily();
    await syncFamily();
  } catch (error) {
    console.error(error);
    setStatus('Ошибка подключения', 'error');
    notify(`Не удалось подключить семейное пространство: ${rpcError(error)}`);
  }
}

async function loadClient() {
  try {
    return await import(VENDOR_MODULE);
  } catch (error) {
    return await import(/* @vite-ignore */ CDN_MODULE);
  }
}

async function init() {
  observeHub();
  bindAccountControls();
  if (!isConfigured()) return;
  try {
    const { createClient } = await loadClient();
    supabase = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
    const { data } = await supabase.auth.getSession();
    await onSession(data.session);
    supabase.auth.onAuthStateChange((_event, nextSession) => {
      window.setTimeout(() => onSession(nextSession), 0);
    });
  } catch (error) {
    /* офлайн или заблокированный CDN не должны ронять приложение:
       локальный режим продолжает работать */
    console.warn('Семейная синхронизация недоступна:', error);
    setStatus('Офлайн — данные сохраняются на устройстве');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => { init(); });
} else {
  init();
}
