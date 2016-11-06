var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var heroku_deploy = true;
if (heroku_deploy){
    var name = 'heroku_303e07628ba128d';
    var username = 'b174a5579cb408';
    var password = 'a71e760d';
    var options = {
        host: 'us-cdbr-iron-east-04.cleardb.net',
        dialect: "mysql",
        port:    3306
    }
} else {
    var name = 'rethrift-db';
    var username = "rethrift";
    var password = "rethriftpassword";
    var options = {
        host: 'localhost',
        dialect: "mysql",
        port:    3306
    }
}
var client = new Sequelize(host, username, password, options);
var models = {};

// read all models and import them into the "db" object
fs
    .readdirSync(__dirname + '/models')
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach(function (file) {
        var model = client.import(path.join(__dirname + '/models', file));
        models[model.name] = model;
    });

Object.keys(models).forEach(function (modelName) {
    if (models[modelName].options.hasOwnProperty('associate')) {
        models[modelName].options.associate(models);
    }
});

client.sync();

module.exports = models;
module.exports.client = client;
