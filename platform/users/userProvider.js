var userPersistence = require('./userPersistence');

exports.getUser = function *(id){
    if(!id){
        throw new Error("id must be specified");
    }

    return yield userPersistence.getUser(id);
};

exports.createUser = function(object){
    if(!object){
        throw new Error("name must be specified");
    }

    return userPersistence.createUser(object);
}

exports.findAll = function (){
    console.log("finding users, 1");
    return userPersistence.findAll();
}
