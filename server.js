var express = require('express');
var app = express();

var config = {
	secure : false,

	port : {
		insecure : 8081,
		secure : 8443
	}
}

app.use('/', require('./routes/'));

app.use(express.static('public_html'));

app.get(['/', '/*'], function(req, res) {
	res.sendFile(__dirname + '/public_html/index.html');
});

app.listen(config.port.insecure, function() {
	console.log('app listening on ', config.port.insecure);
})
