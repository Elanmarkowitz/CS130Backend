var koa = require('koa');
var db = require('./platform/db');
var mw = require('./lib/middlewares');
var co = require('co');

const router = new mw.router();
const app = new koa();

router.get('/', (ctx) => {
  ctx.body = "hello world";
})

router.post('/users', (ctx) => {
  ctx.body = "hi user";
  console.log(ctx.request.body);
});

co(function *(){
  var connection = null;
})

app.use(mw.bodyParser());
app.use(router.routes());
app.listen(process.env.PORT || 3000);
console.log("server online at port " + process.env.PORT);
