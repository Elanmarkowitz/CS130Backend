var _ = require('lodash');
var koa = require('koa');
var pf = require('./platform');
var mw = require('./lib/middlewares');
var services = require('./services');

const router = new mw.router();
const app = new koa();
const bodyParser = new mw.bodyParser();

var _ =  require('lodash');

app.use(bodyParser);

var createUser = async (ctx) => {
    console.log("creating user: " + ctx.request.body)
    pf.users.createUser(ctx.request.body);
}

var getAllUsers =  async (ctx) => {
    console.log("getting users");
    ctx.response.status = 400;
    var users = await pf.users.findAll();
    if (users){
        ctx.response.status = 200;
        ctx.response.body = _.map(users, 'dataValues');
    }
}

var getUser = async (ctx) => {
    debugger
    console.log("getting user with id/username:" + ctx.params.id);
    ctx.response.status = 400;
    var user = await pf.users.getUser(ctx.params.id);
    if (user){
        ctx.response.status = 200;
        ctx.response.body = user.dataValues;
    }
}

var createPost = async (ctx) => {
    console.log("creating post: " + ctx.request.body)
    pf.posts.createPost(ctx.request.body);
}

router.post('/users/create', createUser);
router.get('/users/all', getAllUsers);
router.get('/users/:id', getUser);

router.post('/posts/create', createPost);

app.use(router.routes());

//app.use(mw.mount('/users', services.users));
//app.use(mw.mount('/users', services.posts));
app.listen(process.env.PORT || 3000);
console.log("server online at port " + (process.env.PORT ? process.env.PORT:3000));
