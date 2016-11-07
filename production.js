'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _ = require('lodash');
var koa = require('koa');
var pf = require('./platform');
var mw = require('./lib/middlewares');
var services = require('./services');

const router = new mw.router();
const app = new koa();

var _ = require('lodash');

var createUser = (() => {
    var _ref = _asyncToGenerator(function* (ctx) {
        console.log("creating users: " + ctx.request.body);
        pf.users.createUser(ctx.request.body);
    });

    return function createUser(_x) {
        return _ref.apply(this, arguments);
    };
})();

var getAllUsers = (() => {
    var _ref2 = _asyncToGenerator(function* (ctx) {
        console.log("getting users");
        ctx.response.status = 400;
        var users = yield pf.users.findAll();
        if (users) {
            ctx.response.status = 200;
            ctx.response.body = _.map(users, 'dataValues');
        }
    });

    return function getAllUsers(_x2) {
        return _ref2.apply(this, arguments);
    };
})();

var getUser = (() => {
    var _ref3 = _asyncToGenerator(function* (ctx) {
        debugger;
        console.log("getting user with id/username:" + ctx.params.id);
        ctx.response.status = 400;
        var user = yield pf.users.getUser(ctx.params.id);
        if (user) {
            ctx.response.status = 200;
            ctx.response.body = user.dataValues;
        }
    });

    return function getUser(_x3) {
        return _ref3.apply(this, arguments);
    };
})();
router.post('/users/create', createUser);
router.get('/users/all', getAllUsers);
router.get('/users/:id', getUser);

app.use(router.routes());

//app.use(mw.mount('/users', services.users));
//app.use(mw.mount('/users', services.posts));
app.listen(process.env.PORT || 3000);
console.log("server online at port " + (process.env.PORT ? process.env.Port : 3000));
