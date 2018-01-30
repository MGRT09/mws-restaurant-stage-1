self.addEventListener('install', function(event) {
    event.waitUntil(
    caches.open('rest-v1').then(function(cache){
        return cache.addAll([
        '../css/styles.css',
        '../img/',
        '../data/restaurants.json',
        '../index.html',
        '../restaurant.html',
        '../indexStart.js',        
        '../js/',
        '../js/dbhelper.js',
        '../js/main.js',
        '../js/restaurant_info.js',
        '../sw/'
        ]);
      })
    );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
    caches.match(event.request).then(function(response){
        return response || fetch(event.request);
    })
    );
});