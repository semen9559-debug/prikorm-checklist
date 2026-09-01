#!/usr/bin/env node
/* Версия должна совпадать в version.json, index.html и sw.js.
   Именно здесь она когда-то разъехалась: version.json v70 против CACHE v29. */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = file => readFileSync(join(root, file), 'utf8');

const version = String(JSON.parse(read('version.json')).v);
const number = version.replace(/\D/g, '');
const html = read('index.html');
const sw = read('sw.js');

const problems = [];
if (html.match(/window\.APP_VERSION = "(v\d+)"/)?.[1] !== version) {
  problems.push(`index.html: APP_VERSION ≠ ${version}`);
}
const queries = [...new Set(html.match(/\?v=(\d+)/g) || [])];
if (queries.some(q => q !== `?v=${number}`)) {
  problems.push(`index.html: разные ?v= — ${queries.join(', ')} (ожидалось ?v=${number})`);
}
if (sw.match(/const VERSION = "(v\d+)"/)?.[1] !== version) {
  problems.push(`sw.js: VERSION ≠ ${version}`);
}

if (problems.length) {
  console.error('Версии разъехались:\n  ' + problems.join('\n  '));
  console.error('Почините одной командой: npm run release');
  process.exit(1);
}
console.log(`Версия ${version} одинакова во всех файлах.`);
