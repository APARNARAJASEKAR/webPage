var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "aparna",
    password: "root1234"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected your database successfully!");
});