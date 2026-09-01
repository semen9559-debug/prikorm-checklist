#!/usr/bin/env node
/* Единая версия релиза.
   Раньше номер правился руками в четырёх местах и уже разъехался:
   version.json был v70, а CACHE в sw.js — v29.

   Использование:
     node tools/release.mjs            # следующий номер (v70 -> v71)
     node tools/release.mjs 85         # конкретный номер
*/
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = file => readFileSync(join(root, file), 'utf8');
const write = (file, text) => writeFileSync(join(root, file), text);

const current = Number(String(JSON.parse(read('version.json')).v).replace(/\D/g, '')) || 0;
const next = process.argv[2] ? Number(String(process.argv[2]).replace(/\D/g, '')) : current + 1;
if (!Number.isFinite(next) || next <= 0) {
  console.error('Не понял номер версии:', process.argv[2]);
  process.exit(1);
}
const tag = `v${next}`;

write('version.json', JSON.stringify({ v: tag }) + '\n');

let html = read('index.html');
html = html.replace(/window\.APP_VERSION = "v\d+";/, `window.APP_VERSION = "${tag}";`);
html = html.replace(/\?v=\d+/g, `?v=${next}`);
write('index.html', html);

let sw = read('sw.js');
sw = sw.replace(/const VERSION = "v\d+";/, `const VERSION = "${tag}";`);
write('sw.js', sw);

/* Проверяем, что версия действительно одна и та же везде. */
const found = {
  'version.json': JSON.parse(read('version.json')).v,
  'index.html (APP_VERSION)': read('index.html').match(/window\.APP_VERSION = "(v\d+)"/)?.[1],
  'index.html (?v=)': [...new Set(read('index.html').match(/\?v=\d+/g) || [])].join(', '),
  'sw.js': read('sw.js').match(/const VERSION = "(v\d+)"/)?.[1]
};
const mismatched = Object.entries(found).filter(([, value]) => value !== tag && value !== `?v=${next}`);
if (mismatched.length) {
  console.error('Версии разъехались:', found);
  process.exit(1);
}
console.log(`Версия обновлена: ${current ? 'v' + current : '—'} → ${tag}`);
console.log('Дальше: git add -A && git commit -m "Release ' + tag + '" && git push');
