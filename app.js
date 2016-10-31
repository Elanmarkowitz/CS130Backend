var koa = require('koa');
var pf = require('./platform/index');
var db = require('./platform/db');
var mw = require('./lib/middlewares');
var co = require('co');

const router = new mw.router();
const app = new koa();

router.get('/', (ctx) => {
  ctx.body = "hello world";
})

router.post('/users', (ctx) => {
  pf.users.createUser(ctx.request.body);
  console.log(ctx.request.body);
})

router.get('users/all', (ctx) => {
    ctx.body = pf.users.findAll();
})

co(function *(){
  var connection = null;
})

app.use(mw.bodyParser());
app.use(router.routes());
app.listen(process.env.PORT || 3000);
console.log("server online at port " + process.env.PORT);
