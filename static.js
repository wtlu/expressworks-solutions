// Exercise 4: Static
// Exercise 5: Stylus
var express = require('express');
var app = express();
app.use(express.static(process.argv[3]));
app.use(require('stylus').middleware(process.argv[3]));

app.listen(process.argv[2]);