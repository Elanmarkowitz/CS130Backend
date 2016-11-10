var pf = require('../../platform');
var _ =  require('lodash');

var createUser = async (ctx) => {
    console.log("creating users: " + ctx.request.body);
    var user = await pf.users.createUser(ctx.request.body);
    if (user) {
        ctx.response.status = 200;
    }
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
    console.log("getting user with id/username:" + ctx.params.id);
    ctx.response.status = 400;
    var user = await pf.users.getUser(ctx.params.id);
    if (user){
        ctx.response.status = 200;
        ctx.response.body = user.dataValues;
    }
}
exports.register = (router) => {
    router.post('/users/create', createUser);
    router.get('/users/all', getAllUsers);
    router.get('/users/:id', getUser);
    //router.get('/users/:id/posts', getUserPosts);
}
