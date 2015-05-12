var express = require('express');
var mongoose = require('mongoose');

//Init mongodb connection using mongoose
mongoose.connect('mongodb://localhost/cagnote');
mongoose.connection.on('error', function(err){
    console.error(err);
});

mongoose.connection.once('open', function(cb){
    console.info("Connection to mongodb stablished!");
});

var app = express();

// JADE as templating engine
app.set('view engine', 'jade');

//Configure and launch server
var server = app.listen(8010, function(){
	var address = server.address();
	console.log("AXB-Cangote running at: http://%s:%s", address.host, address.port);
});


//Basic routing
app.get('/', function(req, res){
	res.render('index');
});

