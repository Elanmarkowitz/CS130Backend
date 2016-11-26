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
    var intId = parseInt(ctx.params.id, 10);
    console.log("getting user with id/username:" + ctx.params.id);
    ctx.response.status = 400;
    if (!isNaN(intId)) {
        var user = await pf.users.getUser(intId);
    } else {
        var user = await pf.users.getUser(ctx.params.id);
    }
    if (user){
        ctx.response.status = 200;
        ctx.response.body = user.dataValues;
    }
}

var getUserPosts = async (ctx) => {
    console.log("getting " + ctx.params.id + "'s posts");
    ctx.response.status = 400;
    var posts = await pf.users.getUserPosts(ctx.params.id);
    if (posts){
        ctx.response.status = 200;
        ctx.response.body = _.map(posts, 'dataValues');
    }
}

var getWatchlist = async (ctx) => {
    console.log("getting " + ctx.params.id + "'s watchlist");
    ctx.response.status = 400;
    var posts = await pf.users.getWatchedPosts(ctx.params.id);
    if (posts){
        ctx.response.status = 200;
        ctx.response.body = _.map(posts, 'dataValues');
    }
}

var addToWatchlist = async (ctx) => {
    console.log("adding post to watchlist");
    await pf.users.addToWatchlist(ctx.params.id, ctx.request.body.postID);
    ctx.request.status = 200;
}

var removeFromWatchlist = async (ctx) => {
    console.log("removing post from watchlist");
    await pf.users.removeFromWatchlist(ctx.params.id, ctx.request.body.postID);
    ctx.request.status = 200;
}

var getNotifications = async (ctx) => {
    console.log('getting ' + ctx.params.id + "'s notifications");
    ctx.response.status = 400;
    var posts = await pf.users.getNotifications(ctx.params.id, ctx.query.timestamp);
    if (posts) {
        ctx.response.status = 200;
        ctx.response.body = posts;
    }
}

exports.register = (router) => {
    router.post('/users/create', createUser);
    router.get('/users/all', getAllUsers);
    router.get('/users/:id', getUser);
    router.get('/users/:id/posts', getUserPosts);
    router.get('/users/:id/watchlist', getWatchlist);
    router.post('/users/:id/watch', addToWatchlist);
    router.post('/users/:id/unwatch', removeFromWatchlist);
    router.get('/users/:id/notifications', getNotifications);
}
