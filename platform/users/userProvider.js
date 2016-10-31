var userPersistence = require('./userPersistence');

exports.getUser = function *(id){
    if(!id){
        throw new Error("id must be specified");
    }

    return yield userPersistence.getUser(id);
};

exports.createUser = function *(object){
    if(!name){
        throw new Error("name must be specified");
    }

    return yield userPersistence.createUser(object);
}

exports.findAll = function *(username){
    return yield userPersistence.findAll();
}
