import { SUPABASE_CONFIG } from './supabase-config.js';

const isConfigured = () => /^https:\/\//.test(SUPABASE_CONFIG.url) && SUPABASE_CONFIG.anonKey.length > 20;
const esc = value => String(value || '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const notify = message => typeof window.toast === 'function' ? window.toast(message) : alert(message);
const appKey = key => !key.startsWith('sb-') && !key.startsWith('mama-sync-') && key !== 'pk-upd';

let supabase = null;
let session = null;
let familyId = null;
let patchedStorage = false;
let originalSetItem = null;
let suppressSync = false;
let realtime = null;

function currentOrigin() { return `${location.origin}${location.pathname}`; }
function getInviteToken() { return new URLSearchParams(location.search).get('invite'); }
function setStatus(text, tone = '') {
  document.querySelectorAll('[data-family-status]').forEach(el => { el.textContent = text; el.className = `family-status ${tone}`; });
}

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
    if (label) label.textContent = signedIn ? 'Моя семья' : 'Регистрация и вход';
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
  document.querySelectorAll('[data-family-entry]').forEach(button => button.addEventListener('click', openMenuAccount));
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
  button.addEventListener('click', openAccount);
  top.appendChild(button);
  updateAccountControls();
}

function observeHub() {
  addAccountButton();
  new MutationObserver(addAccountButton).observe(document.body, { childList: true, subtree: true });
}

function openModal(title, content) {
  document.getElementById('familyModal')?.remove();
  const modal = document.createElement('div');
  modal.id = 'familyModal';
  modal.innerHTML = `<div class="family-modal-backdrop"></div><section class="family-modal-card" role="dialog" aria-modal="true" aria-label="${esc(title)}"><div class="family-modal-head"><h2>${esc(title)}</h2><button type="button" class="family-close" aria-label="Закрыть">×</button></div><div class="family-modal-body">${content}</div></section>`;
  document.body.appendChild(modal);
  modal.querySelector('.family-close').addEventListener('click', () => modal.remove());
  modal.querySelector('.family-modal-backdrop').addEventListener('click', () => modal.remove());
  return modal;
}

function configurationNotice() {
  return `<div class="family-note"><b>Тестовый режим ещё не подключён.</b><br>Добавьте URL и publishable anon key проекта в <code>scripts/supabase-config.js</code>. Пароли и служебные ключи в сайт не добавляются.</div>`;
}

function openAccount() {
  if (!isConfigured()) {
    openModal('Аккаунт и семья', `${configurationNotice()}<p class="family-muted">Интерфейс уже готов, но регистрация появится после подключения тестового Supabase-проекта.</p>`);
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
    const email = form.email.value.trim().toLowerCase();
    const password = form.password.value;
    const result = isRegister
      ? await supabase.auth.signUp({ email, password, options: { emailRedirectTo: currentOrigin() } })
      : await supabase.auth.signInWithPassword({ email, password });
    if (result.error) return notify(result.error.message);
    if (isRegister && !result.data.session) {
      notify('Письмо с подтверждением отправлено. Подтвердите email и войдите в аккаунт.');
      modal.remove();
      return;
    }
    modal.remove();
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
    modal.remove();
  });
}

function localSnapshot() {
  const data = {};
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    if (key && appKey(key)) data[key] = localStorage.getItem(key);
  }
  return data;
}

async function ensureFamily() {
  const { data: memberships, error } = await supabase.from('family_members').select('family_id, role, families(name)').eq('user_id', session.user.id).limit(1);
  if (error) throw error;
  if (memberships?.length) {
    familyId = memberships[0].family_id;
    return memberships[0];
  }
  const { data, error: createError } = await supabase.rpc('create_family', { family_name: 'Наша семья' });
  if (createError) throw createError;
  familyId = data;
  return { family_id: data, role: 'owner', families: { name: 'Наша семья' } };
}

async function importLocalData() {
  const snapshot = localSnapshot();
  const rows = Object.entries(snapshot).map(([storage_key, value]) => ({ family_id: familyId, storage_key, value: value ?? '', updated_by: session.user.id }));
  if (!rows.length) return;
  const { error } = await supabase.from('app_state').upsert(rows, { onConflict: 'family_id,storage_key' });
  if (error) throw error;
  localStorage.setItem('mama-sync-imported-family', familyId);
}

async function pullRemoteData() {
  const { data, error } = await supabase.from('app_state').select('storage_key, value').eq('family_id', familyId);
  if (error) throw error;
  if (!data?.length) return false;
  suppressSync = true;
  data.forEach(row => originalSetItem.call(localStorage, row.storage_key, row.value));
  suppressSync = false;
  return true;
}

async function pushKey(key, value) {
  if (!familyId || suppressSync || !appKey(key)) return;
  const { error } = await supabase.from('app_state').upsert({ family_id: familyId, storage_key: key, value: value ?? '', updated_by: session.user.id }, { onConflict: 'family_id,storage_key' });
  if (error) setStatus('Не удалось синхронизировать', 'error');
  else setStatus('Синхронизировано', 'ok');
}

function patchStorage() {
  if (patchedStorage) return;
  patchedStorage = true;
  originalSetItem = Storage.prototype.setItem;
  Storage.prototype.setItem = function(key, value) {
    const result = originalSetItem.call(this, key, value);
    if (this === localStorage && session && !suppressSync) pushKey(String(key), String(value));
    return result;
  };
}

async function subscribeRealtime() {
  realtime?.unsubscribe();
  realtime = supabase.channel(`family-state-${familyId}`).on('postgres_changes', { event: '*', schema: 'public', table: 'app_state', filter: `family_id=eq.${familyId}` }, payload => {
    const row = payload.new;
    if (!row || row.updated_by === session.user.id) return;
    suppressSync = true;
    originalSetItem.call(localStorage, row.storage_key, row.value);
    suppressSync = false;
    notify('Семья обновила данные — страница обновится.');
    setTimeout(() => location.reload(), 900);
  }).subscribe();
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

function openImportPrompt() {
  const modal = openModal('Перенести данные в семью?', `<p>На этом устройстве уже есть записи. Перенесём их в общее семейное пространство? Локальная копия останется на устройстве.</p><div class="family-modal-buttons"><button type="button" class="family-primary" data-import>Перенести данные</button><button type="button" data-later>Позже</button></div>`);
  modal.querySelector('[data-import]').addEventListener('click', async () => {
    try { await importLocalData(); notify('Данные перенесены в семейное пространство'); modal.remove(); } catch (error) { notify(error.message); }
  });
  modal.querySelector('[data-later]').addEventListener('click', () => modal.remove());
}

async function openFamily() {
  const { data: family } = await supabase.from('families').select('name, owner_id').eq('id', familyId).single();
  const { data: members } = await supabase.from('family_members').select('user_id, role, profiles(display_name)').eq('family_id', familyId).order('created_at');
  const isOwner = family?.owner_id === session.user.id;
  const list = (members || []).map(member => `<li><span>${esc(member.profiles?.display_name || (member.user_id === session.user.id ? session.user.email : 'Участник'))}</span><b>${member.role === 'owner' ? 'Владелец' : 'Редактор'}</b></li>`).join('');
  const modal = openModal('Моя семья', `
    <div class="family-summary"><b>${esc(family?.name || 'Наша семья')}</b><span data-family-status class="family-status ok">Синхронизировано</span></div>
    <p class="family-muted">${esc(session.user.email)}</p>
    <h3>Участники</h3><ul class="family-members">${list}</ul>
    ${isOwner ? '<button class="family-primary" type="button" data-invite>Пригласить близкого</button>' : ''}
    <button type="button" class="family-secondary" data-import-local>Перенести данные этого устройства</button>
    <button type="button" class="family-danger" data-sign-out>Выйти из аккаунта</button>`);
  modal.querySelector('[data-invite]')?.addEventListener('click', openInvite);
  modal.querySelector('[data-import-local]').addEventListener('click', async () => { try { await importLocalData(); notify('Данные синхронизированы'); } catch (error) { notify(error.message); } });
  modal.querySelector('[data-sign-out]').addEventListener('click', async () => { await supabase.auth.signOut(); modal.remove(); });
}

async function makeToken() {
  const bytes = new Uint8Array(24);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
}

function openInvite() {
  const modal = openModal('Пригласить в семью', `<form id="familyInviteForm" class="family-form"><label>Email — необязательно для ссылки<input name="email" type="email" autocomplete="email" placeholder="grandma@example.com"></label><p class="family-muted">По email откроется готовое письмо. Ссылку можно отправить в мессенджере.</p><button class="family-primary" type="submit">Создать приглашение</button></form><div id="familyInviteResult"></div>`);
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
      result.querySelector('[data-copy]').addEventListener('click', async () => { await navigator.clipboard.writeText(url); notify('Ссылка скопирована'); });
      result.querySelector('[data-email]')?.addEventListener('click', () => { location.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent('Приглашение в Мама рядом')}&body=${encodeURIComponent(`Присоединяйся к нашей семье в приложении: ${url}`)}`; });
    } catch (error) { notify(error.message); }
  });
}

async function acceptInvite() {
  const token = getInviteToken();
  if (!token || !session) return;
  const { error } = await supabase.rpc('accept_family_invitation', { raw_token: token });
  if (error) return notify(error.message);
  history.replaceState({}, '', currentOrigin());
  notify('Вы присоединились к семье 🎉');
  location.reload();
}

async function onSession(nextSession) {
  session = nextSession;
  updateAccountControls();
  addAccountButton();
  if (!session) { familyId = null; setStatus('Локальный режим'); return; }
  try {
    await acceptInvite();
    await ensureFamily();
    await syncFamily();
  } catch (error) {
    console.error(error);
    setStatus('Ошибка подключения', 'error');
    notify(`Не удалось подключить семейное пространство: ${error.message}`);
  }
}

async function init() {
  observeHub();
  bindAccountControls();
  if (!isConfigured()) return;
  const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2');
  supabase = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
  const { data } = await supabase.auth.getSession();
  await onSession(data.session);
  supabase.auth.onAuthStateChange((_event, nextSession) => { window.setTimeout(() => onSession(nextSession), 0); });
}

document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
