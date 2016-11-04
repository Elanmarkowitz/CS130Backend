var db = require('../db');

exports.getUser = function (id){
    if (typeof(id) === 'number') {
        var user = db.sequelize.User.findByID(id);
    }
    if (typeof(id) === 'string') {
        var user = db.sequelize.User.findOne({
            where: {
                username: id
            }
        })
    }
    return user;
};

exports.createUser = function(object){
    var newUser = db.sequelize.User.create(object);
    return newUser;
}

exports.findAll = function(){
    return db.sequelize.User.findAll();
}
