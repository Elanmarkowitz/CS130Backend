var Router = require('koa-router');
var router = new Router();

require('./users').register(router);

module.exports = router;
