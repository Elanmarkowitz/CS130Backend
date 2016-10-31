var db = require('../db');

exports.getUser = function *(id){
    var id = Number(id);
    // var cachedUser = yield db.redis.get('/users/' + id);
    // if(cachedUser){
    //     return JSON.parse(cachedUser);
    // }

    var user = yield db.sequelize.User.find(Number(id));
    if(user){
        yield db.redis.set('/users/' + id, JSON.stringify(user));
    }
    return user;
};

exports.createUser = function *(firstName, lastName, email, username){
    var newUser = yield db.sequelize.User.create(
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username
      });
    // if(newUser){
    //     yield db.redis.set('/users/' + newUser.id, JSON.stringify(newUser));
    // }
    return newUser;
}
