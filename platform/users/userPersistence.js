var db = require('../db');

var getUser = exports.getUser = async function (id){
    if (typeof(id) === 'number') {
        var user = await db.sequelize.User.findById(id);
    }
    if (typeof(id) === 'string') {
        var user = await db.sequelize.User.findOne({
            where: {
                username: id
            }
        })
    }
    return user;
};

exports.createUser = async function(object){
    console.log(object);
    var newUser = await db.sequelize.User.create(object);
    var assWatchlist = await newUser.createWatchlist();
    await assWatchlist.setUser(newUser);
    return newUser;
}

exports.findAll = async function(){
    return await db.sequelize.User.findAll();
}

exports.getUserPosts = async function(id){
    var user = await getUser(id);
    var posts = await user.getPosts();
    return posts
};

var getWatchlist = exports.getWatchlist = async function(userID){
    var user = await getUser(id);
    var watchlist = await user.getWatchlist();
    var posts = await watchlist.getPosts();
    return posts;
}

exports.addToWatchlist = async function(userID, postID){
    var watchlist = await getWatchlist(userID);
    await watchlist.removePost(postID);
    return
}

exports.removeFromWatchlist = async function(userID, postID){
    var watchlist = await getWatchlist(userID);
    await watchlist.removePost(postID);
    return
}
