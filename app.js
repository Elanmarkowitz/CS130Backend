var koa = require('koa');
var db = require('./db');
var middlewares = require('./lib/middlewares');
var app = koa();

app.use(middlewares.router());

app.use(function *(){
  var url = this.request.url;
  this.body = "hello world";
});

app.listen(3000);
