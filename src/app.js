var koa = require('koa');
var router = require('koa-router');
var Connection = require('sequelize-connect');
var orm = new Connection();
var sequelize = orm.sequelize;
var Sequelize = orm.Sequelize;
var models = orm.models

var app = koa();

app.use(function *(){
  var url = this.request.url;
  this.body = "hello world";
});

app.listen(3000);
