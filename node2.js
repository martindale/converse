var converse = require('./converse');

converse.config.services.http.port = 9201;
converse.config.seeds = ['127.0.0.1:1337'];

converse.start();
