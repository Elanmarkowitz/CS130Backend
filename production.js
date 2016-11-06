<<<<<<< HEAD
var koa = require('koa');
var pf = require('./platform');
=======
'use strict';

var koa = require('koa');
>>>>>>> 080c8c2ab3361ebac2b1fa630be1dfe12bb1ee4c
var db = require('./platform/db');
var mw = require('./lib/middlewares');
var co = require('co');

const router = new mw.router();
const app = new koa();

router.get('/', ctx => {
<<<<<<< HEAD
    ctx.body = "hello world";
});

router.post('/users', ctx => {
    console.log(ctx.request.body);
    ctx.body = "/users";
    console.log(pf.users.createUser(ctx.request.body));
});
router.get('/users/all', ctx => {
    console.log("getting users");
    ctx.response.status = 200;
    pf.users.findAll().then(function (x) {
        if (x) {
            ctx.response.body = x;
            console.log(x);
        } else {
            console.log("none found");
        }
    });
});
router.get('/users/:id', ctx => {
    console.log("getting user with id/username:" + ctx.params.id);
    ctx.response.status = 200;
    var user = pf.users.getUser(ctx.params.id);
    if (user) ctx.response.status = 200;
    debugger;
    user.then(function (x) {
        if (x) {
            console.log(x.dataValues);
        } else {
            console.log("user not found");
        }
    });
});

//app.use(mw.bodyParser());
app.use(router.routes());
app.listen(process.env.PORT || 3000);
console.log("server online at port " + (process.env.PORT ? process.env.Port : 3000));
=======
  ctx.body = "hello world";
});

router.post('/users', ctx => {
  ctx.body = "hi user";
  console.log(ctx.request.body);
});

co(function* () {
  var connection = null;
});

app.use(mw.bodyParser());
app.use(router.routes());
app.listen(process.env.PORT || 3000);
console.log("server online at port " + process.env.PORT);
>>>>>>> 080c8c2ab3361ebac2b1fa630be1dfe12bb1ee4c
