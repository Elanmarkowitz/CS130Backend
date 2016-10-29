var koa = require('koa');
var db = require('./platform/db');
var mw = require('./lib/middlewares');
var co = require('co');

const router = new mw.router();
var app = new koa();

//app.use(mw.router());
app.use(mw.bodyParser());

router.get('/', (ctx) => {
  ctx.body = "hello world";
})

router.post('/users', (ctx) => {
  ctx.body = "hi user";
  console.log(ctx.request.body);
});

app.use(router.routes());

/*app.use(function *(){
  var url = this.request.url;
  this.body = "hello world";
});*/

co(function *(){
  var connection = null;
})

app.listen(process.env.PORT || 3000);
console.log("server online at port " + process.env.PORT);
