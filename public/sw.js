var CACHE_STATIC_NAME = 'static-cache';

self.addEventListener('install', function (event) {
    console.log("Installing Service Worker..", event);
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
            .then(function (cache) {
                console.log('service worker precaching app shell');
                cache.addAll([
                    '/index.html',
                    '/static/css/2.98fbfe26.chunk.css',
                    '/static/css/2.98fbfe26.chunk.css.map',
                    '/static/css/main.af41e441.chunk.css',
                    '/static/css/main.af41e441.chunk.css.map',
                    '/static/js/2.2ac5335b.chunk.js',

                    '/static/js/2.2ac5335b.chunk.js.map',

                    '/static/js/main.8bcc7e3c.chunk.js',
                    '/static/js/main.8bcc7e3c.chunk.js.map',
                    '/static/js/runtime-main.1332e2ee.js',
                    '/static/js/runtime-main.1332e2ee.js.map'

                ]);


            })
    )

});

self.addEventListener('activate', function (event) {
    console.log("Activating Service Worker..", event);

    event.waitUntil(
        caches.keys()
            .then((keyList) => {
                return Promise.all(keyList.map((key) => {
                    if (key !== CACHE_STATIC_NAME) {
                        console.log('Service worker removing old cache', key);
                        return caches.delete(key);
                    }
                }
                ))
            })
    )

    return self.clients.claim();

});



self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) {
                    return response;
                } else {
                    return fetch(event.request);
                }
            }
            )

    )
});

