#!/usr/bin/env node
/* Копирует веб-приложение из корня репозитория в ios/WebApp, чтобы
   нативная обёртка (Xcode-проект) не расходилась с живым сайтом.
   Корень — источник истины; ios/WebApp — просто бандл для приложения.

   Использование:
     node tools/sync-ios.mjs
     npm run sync-ios
*/
import { cpSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dest = join(root, 'ios/WebApp');

const files = [
  'index.html',
  'manifest.webmanifest',
  'privacy.html',
  'sw.js',
  'version.json',
  'icon-180.png',
  'icon-192.png',
  'icon-512.png'
];

const dirs = ['scripts', 'styles'];

mkdirSync(dest, { recursive: true });

for (const file of files) {
  cpSync(join(root, file), join(dest, file));
}

for (const dir of dirs) {
  cpSync(join(root, dir), join(dest, dir), { recursive: true });
}

console.log(`Скопировано в ${dest}: ${files.join(', ')}, ${dirs.join('/, ')}/`);
