var orm = require('orm');
var settings = require('../config/settings.js');
console.log(settings.database);

function setup(db) {
  var Users = require('./users.js');
}

var db = orm.connect(settings);

db.on('connect', function(err,db) {
  if (err) return console.error('Connection error: ' + err);
  var Users = db.define('users', {
		first_name:      { type: 'text' },
		last_name:    { type: 'text' },
		email:    { type: 'text' },
		password: { type: 'text' },
		created:    { type: 'text' },
		modified:    { type: 'text' }
	});
});
module.exports = new setup(db);


