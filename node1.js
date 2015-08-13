var converse = require('./converse');

converse.config.services.http.port = 9200;
converse.config.seeds = ['127.0.0.1:1338'];

converse.start();
