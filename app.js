var koa = require('koa');
var pf = require('./platform');
var db = require('./platform/db');
var mw = require('./lib/middlewares');
var co = require('co');

const router = new mw.router();
const app = new koa();

router.get('/', (ctx) => {
    ctx.body = "hello world";
})

router.post('/users', (ctx) => {
    console.log(ctx.request.body);
    ctx.body = "/users"
    console.log(pf.users.createUser(ctx.request.body));
})

router.get('/users/all', (ctx) => {
    console.log("getting users");
    console.log(pf.users.findAll());
})

co(function*() {
    var connection = null;
})

app.use(mw.bodyParser());
app.use(router.routes());
app.listen(process.env.PORT || 3000);
console.log("server online at port " + process.env.PORT);
