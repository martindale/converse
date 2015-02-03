var Maki = require('maki');
var converse = new Maki();

var Passport = require('maki-passport-local');
var passport = new Passport({
  resource: 'Person'
});

converse.use( passport );

var Person = converse.define('Person', require('./resources/Person') );
var Forum  = converse.define('Forum',  require('./resources/Forum') );
var Topic  = converse.define('Topic',  require('./resources/Topic') );
var Post   = converse.define('Post',   require('./resources/Post') );

converse.start();
