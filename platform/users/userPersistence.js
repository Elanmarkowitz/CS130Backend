var db = require('../db');

exports.getUser = function *(id){
    var id = Number(id);
    // var cachedUser = yield db.redis.get('/users/' + id);
    // if(cachedUser){
    //     return JSON.parse(cachedUser);
    // }

    var user = yield db.sequelize.User.find();
    if(user){
        yield db.redis.set('/users/' + id, JSON.stringify(user));
    }
    return user;
};

exports.createUser = function(object){
    console.log("creating user");
    var newUser = db.sequelize.User.create(object);
    // if(newUser){
    //     yield db.redis.set('/users/' + newUser.id, JSON.stringify(newUser));
    // }
    return newUser;
}

exports.findAll = function(){
    console.log("finding users");
    return db.sequelize.User.findAll();
}
