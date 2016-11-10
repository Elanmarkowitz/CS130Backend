var _ = require('lodash');
var koa = require('koa');
var pf = require('./platform');
var mw = require('./lib/middlewares');
var services = require('./services');

const router = new mw.router();
const app = new koa();

app.use(mw.bodyParser());
app.use(services.users.routes());
app.use(services.posts.routes());
app.listen(process.env.PORT || 3000);
console.log("server online at port " + (process.env.PORT ? process.env.PORT:3000));
