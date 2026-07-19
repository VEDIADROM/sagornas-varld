/* Sagornas värld — service worker: spelet funkar offline */
const CACHE = 'sagornas-varld-v1';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // spelet självt: nätet först (så uppdateringar når fram), cache som reserv
  if (req.mode === 'navigate' || req.url.endsWith('index.html')) {
    e.respondWith(
      fetch(req)
        .then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return res; })
        .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('./index.html')))
    );
    return;
  }
  // övrigt (ikoner, manifest): cache först
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(r =>
      r || fetch(req).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return res; })
    )
  );
});
