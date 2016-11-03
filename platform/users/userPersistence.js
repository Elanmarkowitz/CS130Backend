var db = require('../db');

exports.getUser = function *(id){
    var user;
    debugger
    if (typeof(id) === 'number') {
        user = yield db.sequelize.User.findByID(id);
    }
    if (typeof(id) === 'string') {
         user = yield db.sequelize.User.findOne({
            where: {
                username: id
            }
        });
    }
    debugger
    return user;
};

exports.createUser = function *(object){
    var newUser = db.sequelize.User.create(object);
    return newUser;
}

exports.findAll = function *(){
    return db.sequelize.User.findAll();
}
