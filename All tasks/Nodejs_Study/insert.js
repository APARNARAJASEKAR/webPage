var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("db");
    var add = [{
            sno: "1",
            Name: "aparna",
            address: " Annal ambedkar nagar IIIrd cross st muthialpet puducherry",
            qualification: "Mca",
            college: " Pondicherry Engineering College"
        },

        {
            sno: "2",
            name: "Sathish",
            address: "Kovilambakkam, puducherry",
            qualification: "Mca",
            college: "Pondicherry Engineering College"
        },

        {
            sno: "3",
            name: "sumithra",
            address: "mailam,pudcuherry",
            qualification: "mca",
            college: "pondciherry Engineering college"
        },
    ]


    dbo.collection("Friends").insertMany(add, function (err, res) {
        if (err) throw err;
        console.log("one file inserted");
        db.close();
    });
});