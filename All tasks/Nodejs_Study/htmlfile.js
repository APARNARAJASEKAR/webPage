var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('public'));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'safe.html'));
});

var server = app.listen(5000);
console.log(__dirname);