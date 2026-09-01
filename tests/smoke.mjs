#!/usr/bin/env node
/* Дымовые тесты: поднимают статический сервер и прогоняют приложение в
   headless-браузере. Ловят то, что раньше ловилось только руками:
   пустой экран, ошибки в консоли, неработающий раздел, потерю данных. */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, extname, normalize } from 'node:path';
import { chromium } from 'playwright';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.png': 'image/png',
  '.webmanifest': 'application/manifest+json'
};

const server = createServer(async (req, res) => {
  const path = decodeURIComponent(req.url.split('?')[0]);
  const file = join(root, normalize(path === '/' ? '/index.html' : path).replace(/^(\.\.[/\\])+/, ''));
  try {
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404).end('not found');
  }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}/`;

/* Внешние хосты в тестовой среде недоступны — их сетевые ошибки не считаем. */
const EXTERNAL = /esm\.sh|fonts\.googleapis|fonts\.gstatic|supabase\.co/;

const results = [];
const check = (name, ok, detail = '') => {
  results.push({ name, ok, detail });
  console.log(`${ok ? '  ok  ' : ' FAIL '} ${name}${detail && !ok ? ' — ' + detail : ''}`);
};

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
/* Пропускаем онбординг: он перекрывает интерфейс на первом запуске. */
await context.addInitScript(() => {
  try {
    localStorage.setItem('mama-onb', '1');       // онбординг перекрывает интерфейс
    // только значение по умолчанию: тест должен уметь переключить экран сам
    if (!localStorage.getItem('prikorm-view')) localStorage.setItem('prikorm-view', 'prikorm');
  } catch (e) {}
});
const page = await context.newPage();

const consoleErrors = [];
page.on('console', msg => {
  if (msg.type() !== 'error') return;
  const where = msg.location()?.url || '';
  if (EXTERNAL.test(where) || EXTERNAL.test(msg.text())) return; // внешние хосты в тестах недоступны
  consoleErrors.push(`${msg.text()} @ ${where}`);
});
page.on('pageerror', error => consoleErrors.push(String(error)));

await page.goto(base, { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(2500);

/* 1. Страница действительно показана (проверка на белый экран). */
check('страница показана, не белый экран',
  await page.evaluate(() => !document.documentElement.classList.contains('icons-loading')
    && getComputedStyle(document.body).visibility === 'visible'));

/* 2. Контент трекера отрисован. */
const products = await page.locator('#main .item').count();
check('продукты отрисованы', products > 50, `найдено ${products}`);
check('счётчик заполнен', /\d+ из \d+/.test(await page.locator('#heroCount').innerText()));

/* 3. Все разделы открываются и не пустые. */
const views = [
  ['sumka', '#sumkaMain'], ['buy', '#buyMain'], ['dev', '#devMain'],
  ['sleep', '#sleepMain'], ['growth', '#growthMain'], ['diary', '#dyAdd'],
  ['docs', '#docsMain'], ['vac', '#vacMain'], ['preg', '#pregMain'],
  ['prikorm', '#main']
];
for (const [view, selector] of views) {
  await page.evaluate(v => window.setView(v), view);
  await page.waitForTimeout(180);
  const filled = await page.locator(`${selector} > *`).count();
  check(`раздел ${view} не пустой`, filled > 0, `детей: ${filled}`);
}

/* 4. Отметка сохраняется после перезагрузки. */
await page.evaluate(() => window.setView('prikorm'));
await page.locator('#main .item').first().click({ force: true, timeout: 5000 });
await page.waitForTimeout(250);
const before = await page.locator('#heroCount').innerText();
await page.reload({ waitUntil: 'domcontentloaded' });
await page.waitForTimeout(1500);
check('отметка пережила перезагрузку', (await page.locator('#heroCount').innerText()) === before,
  `было "${before}", стало "${await page.locator('#heroCount').innerText()}"`);

/* 5. Резервная копия забирает и настройки (ключи mama-*). */
check('в копию попадают ключи mama-*', await page.evaluate(() => {
  localStorage.setItem('mama-tiles-hidden', '["x"]');
  return typeof isBackupKey === 'function' && isBackupKey('mama-tiles-hidden') && !isBackupKey('mama-sync-imported-family');
}));

/* 6. Модалка: открывается, фокус внутри, Escape закрывает. */
await page.evaluate(() => window.openKidModal(null));
await page.waitForTimeout(300);
check('фокус ушёл в модалку', await page.evaluate(() => document.activeElement?.id === 'kidName'));
await page.keyboard.press('Escape');
await page.waitForTimeout(200);
check('Escape закрывает модалку', !(await page.locator('#kidModal.open').count()));

/* 7. Синхронизация: белый список ключей и слияние данных. */
const syncModule = await page.evaluate(async () => {
  const mod = await import('./scripts/family-auth.js');
  return {
    syncsData: mod.appKey('prikorm-checked-v2__c1'),
    skipsTheme: !mod.appKey('prikorm-theme'),
    skipsView: !mod.appKey('prikorm-view'),
    skipsOpen: !mod.appKey('prikorm-dev-open__c1'),
    skipsAuth: !mod.appKey('sb-token'),
    mergeKeeps: mod.mergeValues('{"a":true}', '{"b":true}'),
    mergeById: mod.mergeValues('[{"id":"c1","name":"Аня"}]', '[{"id":"c2","name":"Петя"}]')
  };
});
check('синхронизируются данные', syncModule.syncsData);
check('тема не уезжает в семью', syncModule.skipsTheme);
check('текущий экран не уезжает в семью', syncModule.skipsView);
check('свёрнутые категории не уезжают', syncModule.skipsOpen);
check('токены авторизации не уезжают', syncModule.skipsAuth);
check('слияние не теряет отметки', syncModule.mergeKeeps === '{"a":true,"b":true}', syncModule.mergeKeeps);
check('слияние списка детей по id', JSON.parse(syncModule.mergeById).length === 2, syncModule.mergeById);

/* 8. Обновление от семьи перерисовывает экран без перезагрузки. */
check('событие family-sync перерисовывает', await page.evaluate(async () => {
  const marker = document.querySelector('#main .item');
  window.dispatchEvent(new CustomEvent('family-sync', { detail: { keys: ['prikorm-checked-v2__c1'] } }));
  await new Promise(r => setTimeout(r, 900));
  return document.querySelector('#main .item') !== marker; // DOM пересобран
}));

/* 9. Переключение темы на главном экране (регрессия: IC был не виден снаружи
      модуля, applyThemeIcon падал и не обновлял цвет статус-бара). */
await page.evaluate(() => { try { localStorage.setItem('prikorm-view', 'home'); } catch (e) {} });
await page.reload({ waitUntil: 'domcontentloaded' });
await page.waitForTimeout(1500);
const themeBefore = await page.getAttribute('meta[name="theme-color"]', 'content');
await page.locator('#themeToggle').click({ force: true });
await page.waitForTimeout(300);
const themeAfter = await page.getAttribute('meta[name="theme-color"]', 'content');
check('тёмная тема меняет цвет статус-бара', themeBefore !== themeAfter, `${themeBefore} → ${themeAfter}`);
check('кнопка темы на главном есть и обновилась',
  await page.evaluate(() => {
    const b = document.querySelector('#homeHub button[data-theme]');
    return Boolean(b) && b.innerHTML.includes('svg');
  }));

/* 10. Консоль чистая. */
check('нет ошибок в консоли', consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | '));

await page.screenshot({ path: join(root, 'tests', 'screenshot-mobile.png'), fullPage: false });
await page.setViewportSize({ width: 1280, height: 900 });
await page.waitForTimeout(400);
await page.screenshot({ path: join(root, 'tests', 'screenshot-desktop.png'), fullPage: false });

await browser.close();
server.close();

const failed = results.filter(r => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} проверок пройдено`);
process.exit(failed.length ? 1 : 0);
