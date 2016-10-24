var koa = require('koa');
var router = require('koa-router');

app.use(router(app));

var app = koa();

app.use(function *(){
  var url = this.request.url;
  this.body = "hello world";
});

app.listen(3000);
