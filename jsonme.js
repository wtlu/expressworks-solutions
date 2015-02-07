// Exercise 8: JSON Me
var fs = require('fs');
var express = require('express');
var app = express();

app.get('/books', function(req, res) {
	fs.readFile(process.argv[3], function(err, data) {
		if (err) {
			throw err
		}
		var result = JSON.parse(data);
		res.send(result);
	});
});
app.listen(process.argv[2]);