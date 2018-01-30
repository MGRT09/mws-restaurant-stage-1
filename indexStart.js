//Register Service Worker
  navigator.serviceWorker.register('sw/sw.js').then(function() {
    console.log('Registration worked!');
  }).catch(function() {
    console.log('Registration failed!');
  });
