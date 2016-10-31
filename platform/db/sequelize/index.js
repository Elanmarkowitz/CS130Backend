var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var username = "rethrift";
var password = "rethriftpassword";
var options = {
    dialect: "mysql",
    port:    3306
};
var client = new Sequelize('rethrift-db', username, password, options);
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
