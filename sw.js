// PreForma Service Worker v1.0
var CACHE_NAME = 'preforma-v1';
var URLS_TO_CACHE = [
  '/PreForma/PreForma.html',
  '/PreForma/manifest.json',
  '/PreForma/preforma-icon-192.png',
  '/PreForma/preforma-icon-512.png',
  '/PreForma/preforma_rezime_preview_web.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
