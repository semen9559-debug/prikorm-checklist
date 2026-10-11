# scripts/vendor

Здесь лежит локальная копия клиента Supabase.

Зачем: `family-auth.js` раньше грузил `https://esm.sh/@supabase/supabase-js@2` —
плавающая мажорная версия со стороннего CDN, с полным доступом к DOM и токенам
сессии, и без офлайн-копии. Локальный файл убирает и риск цепочки поставок,
и зависимость от сети.

Как обновить (нужен интернет):

```bash
node tools/vendor.mjs
git add scripts/vendor/supabase.js
git commit -m "Update supabase-js"
```

Пока файла нет, приложение автоматически откатывается на CDN — работает, но с
теми же рисками. Service worker кэширует файл, если он существует.
