self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("weather").then(cache => {
            return cache.addAll([".", "/src/master.css"]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});