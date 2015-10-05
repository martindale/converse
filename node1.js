var converse = require('./');

converse.config.services.http.port = 9201;

converse.start(function(err) {
  converse.app.get('/test', function(req, res, next) {
    res.send('hey!');
  });
});
