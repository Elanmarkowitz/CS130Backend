var db = require('../db');

exports.getPost = function *(id){
    if (typeof(id) === 'number') {
        var post = yield db.sequelize.Post.findByID(id);
    }
    if (typeof(id) === 'string') {
        var post = yield db.sequelize.Post.findOne({
            where: {
                title: id
            }
        })
    }
    return post;
};

exports.createPost = function *(object){
    var newPost = yield db.sequelize.Post.create(object);
    return newPost;
}

exports.findAll = function *(){
    return yield db.sequelize.Post.findAll();
}
