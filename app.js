var koa = require('koa');
var db = require('./platform/db');
var mw = require('./lib/middlewares');
var co = require('co');

var app = koa();
//app.use(mw.router());

app.use(function *(){
  var url = this.request.url;
  this.body = "hello world";
});

app.listen(3000);

co(function *(){
  var connection = null;
})
