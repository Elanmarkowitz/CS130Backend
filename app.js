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
router.get('/test', function*(ctx, next){
    ctx.body = "generator works";
})
router.post('/users', function*() {
    this.response.body = "/users"
    //var newuser = yield pf.users.createUser(this.request.body);
})
router.get('/users/all', function*() {
    debugger
    console.log("getting users");
    var users = yield pf.users.findAll();
    this.response.status = 200;
})
router.get('/users/:id', function*() {
    console.log('test')
    var user = yield pf.users.getUser(this.params.id);
    if (user) this.response.status = 200;
    // then(
    //     function(x){
    //         if (x){
    //             ctx.response.status = 200;
    //             ctx.response.body = x.dataValues;
    //             console.log(x.dataValues);
    //         } else {
    //             ctx.response.status = 400
    //             console.log("user not found");
    //         }
    //     }
    // );
    //console.log("getting user: " + ctx.params.id);
})

//app.use(mw.bodyParser());
app.use(router.routes());
app.use(router.allowedMethods())
app.listen(process.env.PORT || 3000);
console.log("server online at port " + (process.env.PORT ? process.env.Port:3000));
