// Exercise 3: Good Old Form

var express = require('express');
var bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
  var result = req.body.str.split('').reverse().join('');
  res.send(result);
});
app.listen(process.argv[2]);

