var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var mysql = require('mysql');
var orm = require('orm');

app.use(bodyParser.urlencoded({ extended: true })); 
var settings = require('./config/settings.js');
//var models = require('./models/index.js');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database: "test_db"
});

connection.connect(function(err){
	if(!err) {
		console.log("Database is connected ... \n\n");  
	} else {
		console.log("Error connecting database ... \n\n");  
	}
});

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');

app.use(orm.express(settings, {
    define: function(db, models) {
		 models.users = db.define('users', {
			first_name:      { type: 'text' },
			last_name:    { type: 'text' },
			email:    { type: 'text' },
			password: { type: 'text' },
			created:    { type: 'text' },
			modified:    { type: 'text' }
		});
    }
}));

var routes = require('./routes')(app); // load our routes and pass in our app and fully configured passport
http.listen(3000); 