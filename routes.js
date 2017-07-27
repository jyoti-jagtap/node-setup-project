//First requiring your controller for actions
var usersCtrl = require('./controllers/users');
module.exports = function(app) {
    app.get(    '/'       , usersCtrl.home);
    app.get(    '/user'   , usersCtrl.get);
    app.post(   '/user'   , usersCtrl.create);
};