#!/usr/bin/env node
/* Кладёт клиент Supabase в репозиторий, чтобы приложение не зависело от
   стороннего CDN с плавающей версией (supply-chain риск + офлайн).

   Запускать на машине с доступом в интернет:  node tools/vendor.mjs
   После этого scripts/family-auth.js подхватит локальную копию сам.
*/
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createHash } from 'node:crypto';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const target = join(root, 'scripts', 'vendor');

const meta = await fetch('https://registry.npmjs.org/@supabase/supabase-js/latest').then(r => r.json());
const version = meta.version;
const url = `https://esm.sh/@supabase/supabase-js@${version}?bundle&target=es2020`;

console.log(`Скачиваю @supabase/supabase-js@${version}…`);
const response = await fetch(url);
if (!response.ok) throw new Error(`esm.sh ответил ${response.status}`);
const code = await response.text();

mkdirSync(target, { recursive: true });
const header = `/* @supabase/supabase-js@${version}\n   Скачано ${new Date().toISOString().slice(0, 10)} через tools/vendor.mjs.\n   Не редактируйте вручную — перегенерируйте скриптом. */\n`;
writeFileSync(join(target, 'supabase.js'), header + code);

const hash = createHash('sha384').update(header + code).digest('base64');
console.log(`Готово: scripts/vendor/supabase.js (${(code.length / 1024).toFixed(0)} КБ)`);
console.log(`sha384-${hash}`);
console.log('Не забудьте закоммитить файл.');
