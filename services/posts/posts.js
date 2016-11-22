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
    var results = await pf.posts.searchPosts(searchterms);
    if (results){
        ctx.response.status = 200;
        ctx.response.body = _.map(results, 'dataValues');
    }
}

exports.register = (router) => {
    router.post('/posts/create/:username', createPost);
    router.get('/posts/all', getAllPosts);
    router.get('/posts/search', searchPosts);
    router.get('/posts/one/:id', getPost);
}
