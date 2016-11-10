var Router = require('koa-router');
var router = new Router();

require('./posts').register(router);

module.exports = router;
