self.addEventListener('install', function(event) {
    event.waitUntil(
    caches.open('rest-v1').then(function(cache){
        return cache.addAll([
        '/css/',    
        '/css/styles.css',
        '/data/',
        '/data/restaurants.json',    
        '/img/',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        '/index.html',
        '/restaurant.html',
        '/indexStart.js',
        '/sw.js',
        '/js/',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/'
        ]);
      })
    );
});


self.addEventListener('fetch', function(event) {
    
    console.log(event.request.url);
    event.respondWith(
    caches.match(event.request).then(function(response){
        return response || fetch(event.request);
    })
    );
});