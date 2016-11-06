var _ = require('lodash');
var koa = require('koa');
var pf = require('./platform');
var mw = require('./lib/middlewares');
var services = require('./services');

const app = new koa();


app.use(mw.mount('/users', services.users));
//app.use(mw.mount('/users', services.posts));
app.listen(process.env.PORT || 3000);
console.log("server online at port " + (process.env.PORT ? process.env.Port:3000));
