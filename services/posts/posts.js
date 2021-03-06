var pf = require('../../platform');
var _ =  require('lodash');



var createPost = async (ctx) => {
    console.log("creating posts: " + ctx.request.body);
    ctx.response.status = 400;
    var post = await pf.posts.createPost(ctx.request.body, ctx.params.username);
    if (post){
        ctx.response.status = 200;
    }
}

var getAllPosts =  async (ctx) => {
    console.log("getting posts");
    ctx.response.status = 400;
    var posts = await pf.posts.findAll();
    if (posts){
        ctx.response.status = 200;
        ctx.response.body = _.map(posts, 'dataValues');
    }
}

var getPost = async (ctx) => {
    console.log("getting post with id/title:" + ctx.params.id);
    ctx.response.status = 400;
    var post = await pf.posts.getPost(ctx.params.id);
    if (post){
        ctx.response.status = 200;
        ctx.response.body = post.dataValues;
    }
}

var searchPosts = async (ctx) => {
    console.log("searching posts");
    ctx.response.status = 400;
    var searchterms = JSON.parse(ctx.query.searchterms);
    var location = ctx.query.locationterm ? JSON.parse(ctx.query.locationterm) : false;
    var results = await pf.posts.searchPosts(searchterms, location);
    if (results){
        ctx.response.status = 200;
        ctx.response.body = results;
    }
}

var deletePost = async (ctx) => {
    console.log('deleting post');
    var status = await pf.posts.deletePost(ctx.request.body.postID);
    ctx.response.status = status ? 200 : 400;
}

var updatePost = async (ctx) => {
    console.log('updating post');
    var update = await pf.posts.updatePost(ctx.request.body.postID, ctx.request.body.updateVals);
    ctx.response.status = update ? 200 : 400;
}

exports.register = (router) => {
    router.post('/posts/create/:username', createPost);
    router.post('/posts/delete', deletePost);
    router.get('/posts/all', getAllPosts);
    router.get('/posts/search', searchPosts);
    router.get('/posts/one/:id', getPost);
    router.post('/posts/update', updatePost);
}
