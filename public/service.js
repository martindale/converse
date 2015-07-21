self.addEventListener('install', function(event) {
  console.log('install event');
});

self.addEventListener('activate', function(event) {
  console.log('activate event');

  var ws = new WebSocket('ws://localhost:9200/notifications');
  ws.onopen = function() {
    console.log('open!');
  }
  ws.onmessage = function(message) {
    console.log('message!');
    console.log(message);
  }
});

self.addEventListener('fetch', function(event) {
  console.log('fetch event!');
  console.log(event.request);

  // well this is neat...
  //event.respondWith(new Response("Hello world!"));
  //event.respondWith(
  //  fetch('//www.google.co.uk/logos/…3-hp.gif', {
  //    mode: 'no-cors'
  //  })
  //);
});
