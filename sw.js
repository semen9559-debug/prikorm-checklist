/* Service worker.
   Версию проставляет scripts/release.mjs — вручную её править не нужно. */
const VERSION = "v77";
const CACHE = `prikorm-${VERSION}`;

/* Файлы, без которых приложение не откроется офлайн. */
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles/app.css",
  "./scripts/app.js",
  "./scripts/family-auth.js",
  "./scripts/supabase-config.js",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-180.png"
];

/* Необязательные файлы: их отсутствие не должно ломать установку. */
const OPTIONAL_ASSETS = [
  "./scripts/vendor/supabase.js"
];

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // По одному файлу: раньше один 404 в addAll рушил установку целиком.
    await Promise.all([...CORE_ASSETS, ...OPTIONAL_ASSETS].map(
      asset => cache.add(asset).catch(() => {})
    ));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", e => {
  if (e.data === "skip-waiting") self.skipWaiting();
});

const cacheable = res => res && res.ok && res.type !== "opaque";

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;

  // Никогда не кэшируем проверку версии
  if (req.url.indexOf("version.json") !== -1) return;

  // Страница (HTML): сначала сеть — всегда свежая версия, кэш только офлайн
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then(res => {
          if (cacheable(res)) {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put("./index.html", copy));
          }
          return res;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Ресурсы приложения: сначала сеть, кэш — надёжная офлайн-резервная копия.
  // Так установленная PWA не остаётся на старых стилях или скриптах после релиза.
  e.respondWith((async () => {
    try {
      const res = await fetch(req);
      const url = new URL(req.url);
      // Ошибочные ответы в кэш не кладём: иначе 404 во время выката
      // залипал в офлайн-копии до следующего релиза.
      if (cacheable(res) && (url.origin === location.origin || url.host.includes("fonts.g"))) {
        const c = await caches.open(CACHE);
        c.put(req, res.clone());
      }
      return res;
    } catch (err) {
      return (await caches.match(req)) || caches.match("./index.html");
    }
  })());
});
