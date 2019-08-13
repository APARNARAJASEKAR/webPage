var MongoClient = require('mongodb').MongoClient;
//Create a database named "db":
var url = "mongodb://localhost:27017/db";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});