var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/ShopDB';




var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error', err)
});
db.once('open', function () {
    console.log(' database connected.');
});


var Schema = mongoose.Schema;
var userSchema = new Schema({
    shop_id: number,
    shop_name: string,
    created_year: number,
    products_available: string,
    Owner_name: string
});


var User = mongoose.model('User', userSchema);

MongoClient.connect(url, function (err, db) {
    const d1 = {
        shop_id: 02,
        shop_name: "toys shop",
        created_year: 1998,
        products_available: "kite",
        Owner_name: "Anusuya"
    }


    const d2 = {
        shop_id: 03,
        shop_name: "Food shop",
        created_year: 1999,
        products_available: "maggi",
        Owner_name: "Dandapani"
    }

    const d3 = {
        shop_id: 04,
        shop_name: "pets shop",
        created_year: 2000,
        products_available: "dog",
        Owner_name: "sumithra"
    }

    const d4 = {
        shop_id: 05,
        shop_name: "pets shop",
        created_year: 2001,
        products_available: "cat",
        Owner_name: "suriya"
    }
    const d5 = {
        shop_id: 06,
        shop_name: "food shop",
        created_year: 2002,
        products_available: "Pasta",
        Owner_name: "aparna"
    }
    const d6 = {
        shop_id: 07,
        shop_name: "food shop",
        created_year: 2003,
        products_available: "rice items",
        Owner_name: "aparna"
    }
    const d7 = {
        shop_id: 08,
        shop_name: "flower-shop",
        created_year: "2004",
        products_available: "rose",
        Owner_name: "sathish"

    }

    const d8 = {
        shop_id: 10,
        shop_name: "flower-shop",
        created_year: "2004",
        products_available: "rose",
        Owner_name: "sathish"


    }
    const q1 = {
        "shop_id": 03
    };



    const e1 = {
        Employee_id: 0001,
        Employee_name: "Aparna",
        Joined_year: "2019",
        Designation: "Junior Developer",
        Qualification: "MCA",
        Yop: "2019",
        dateofjoin: "25 June"


    };

    const e2 = {
        Employee_id: 0002,
        Employee_name: "Sathish",
        Joined_year: "2019",
        Designation: "Junior tester",
        Qualification: "MCA",
        Yop: "2019",
        dateofjoin: "01 July"


    };

    const e3 = {
        Employee_id: 0003,
        Employee_name: "Anusuya",
        Joined_year: "2019",
        Designation: "Junior Developer",
        Qualification: "MCA",
        Yop: "2019",
        dateofjoin: "17 June"


    };
    const e4 = {
        Employee_id: 0004,
        Employee_name: "Sumithra",
        Joined_year: "2019",
        Designation: "Junior Developer",
        Qualification: "MCA",
        Yop: "2019",
        dateofjoin: "17 June"


    };
    const e5 = {
        Employee_id: 0005,
        Employee_name: "Danadapani",
        Joined_year: "2019",
        Designation: "Junior Developer",
        Qualification: "MCA",
        Yop: "2019",
        dateofjoin: "25 june"


    };

    const e6 = {
        Employee_id: 0006,
        Employee_name: "Arthi ",
        Joined_year: "2017",
        Designation: "Senior Developer",
        Qualification: "MCA",
        Yop: "2017",
        dateofjoin: "25 june"


    };

    const e7 = {
        Employee_id: 0007,
        Employee_name: "Shravan ",
        Joined_year: "2017",
        Designation: "Senior Developer",
        Qualification: "MCA",
        Yop: "2017",
        dateofjoin: "25 june"


    };
    const e8 = {
        Employee_id: 0008,
        Employee_name: "arul ",
        Joined_year: "2017",
        Designation: "Senior Developer",
        Qualification: "MCA",
        Yop: "2017",
        dateofjoin: "25 june"


    };
    const e9 = {
        Employee_id: 0009,
        Employee_name: "priyanka ",
        Joined_year: "2016",
        Designation: "Designer",
        Qualification: "MCA",
        Yop: "2017",
        dateofjoin: "25 june"


    };






    /*insert one record coding*/
    // db.db().collection('shop').insertOne(d8);
    //console.log("one record inserted");
    /*insert many records coding */
    // db.db().collection('shop').insertMany([d1, d2, d3, d4, d5, d6])
    // console.log("many records successfully inserted");
    /*delete coding*/
    //db.db().collection('shop').deleteMany(q1).then((res) => {
    // console.log(" required record deleted")
    /*update coding*/
    db.db().collection('shop').updateOne({
        'shop_name': 'pets shop'} {$set({
        'shop_name': 'Cooking_store'
    }});

    //});
    //db.db().collection('Employee').insertOne([e9]);
    //console.log("Database Created and record inserted");









});