const CACHE = "prikorm-v19";
const ASSETS = [
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

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;

  // Никогда не кэшируем проверку версии
  if (req.url.indexOf("version.json") !== -1) return;

  // Страница (HTML): сначала сеть — всегда свежая версия, кэш только офлайн
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then(res => { const c = res.clone(); caches.open(CACHE).then(cc => cc.put("./index.html", c)); return res; })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Остальные ресурсы: сначала кэш (быстро), потом сеть
  e.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    try {
      const res = await fetch(req);
      const url = new URL(req.url);
      if (url.origin === location.origin || url.host.includes("fonts.g")) {
        const c = await caches.open(CACHE);
        c.put(req, res.clone());
      }
      return res;
    } catch (err) {
      return caches.match("./index.html");
    }
  })());
});
