var db = require('../db');

exports.getPost = function (id){
    if (typeof(id) === 'number') {
        var post = db.sequelize.Post.findByID(id);
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

exports.createPost = function (object){
    console.log(object);
    var newPost = db.sequelize.Post.create(object);
    return newPost;
}

exports.findAll = function (){
    return db.sequelize.Post.findAll();
}
