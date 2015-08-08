var coalescent = require('coalescent');

var app        = coalescent({
  clientOnly: true,
  seeds: [
    'localhost:1337'
  ]
});

// transform streams as middleware
app.use(coalescent.smartrelay()); // relay received messages to other peers
app.use(coalescent.courier()); // parse incoming messages
app.use(coalescent.router()); // route parsed messages to handlers

// handle errors
app.on('error', function(err, socket) {
  console.log(err);
});

app.on('inv', function(inv) {
  console.log('inv message!', inv);
});

app.on('transaction', function(t) {
  console.log('transaction!', t);
});

app.broadcast('inv');
