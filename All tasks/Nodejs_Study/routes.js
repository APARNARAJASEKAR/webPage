var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    var address = req.body.firstName + ' ' + req.body.address;

    res.send(name + ' Submitted Successfully!');
    res.send(address + 'get successfully');
});

app.post('/edit-student-data', function (req, res) {
    var change = req.body.firstName + ' ' + req.body.lastName;
    res.send(change + 'Edited Successfully!!!')
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
    console.log(__dirname);

});