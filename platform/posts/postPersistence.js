var db = require('../db');
var userFunctions = require('../users');

var getPost = exports.getPost = function (id){
    if (typeof(id) === 'number') {
        var post = db.sequelize.Post.findById(id);
    }
    if (typeof(id) === 'string') {
        var post = db.sequelize.Post.findOne({
            where: {
                title: id
            }
        })
    }
    return post;
};

exports.createPost = async (object, username) => {
    var newPost = await db.sequelize.Post.create(object);
    var postID = newPost.dataValues.id;
    var associatedUser = await userFunctions.getUser(username);
    var userID = associatedUser.dataValues.id;
    newPost = await newPost.setUser(userID);
    associatedUser = await associatedUser.addPost(postID);
    return newPost;
}

exports.updatePost = async () => {

}

exports.findAll = function (){
    return db.sequelize.Post.findAll();
}

exports.searchPosts = async function(searchterms){
    var results = await db.sequelize.Post.findAll(searchterms);
    return results;
}

exports.deletePost = async function (postID){
    var post = await getPost(postID);
    if (!post) {return false}
    var results = await post.destroy();
    return true
}