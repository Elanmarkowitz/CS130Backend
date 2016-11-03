var koa = require('koa');
var app = new koa();
var Router = require('koa-router');
var router = new Router();

router.get('/', function (ctx){
    ctx.body = "hello world";
    console.log("success")
});

app.use(router.routes())
app.use(router.allowedMethods());

app.listen(3000);
console.log("listening on 3000");
