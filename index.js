var express = require('express');

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

