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
    pf.users.findAll().then(
        function(x){
            if(x){
                ctx.response.body = x;
                //console.log(x);
                //ctx.status = 200;
            } else {
                //console.log("none found");
                //ctx.status = 400;
            }
        }
    );
})
router.get('/users/:id', function *() {
    var ctx = this;
    console.log("generating");
    var user = yield pf.users.getUser(ctx.params.id);
    if(user) ctx.response.status = 200;
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
app.listen(process.env.PORT || 3000);
console.log("server online at port " + (process.env.PORT ? process.env.Port:3000));
