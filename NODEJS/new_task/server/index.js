var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

mongoose.connect('mongodb://localhost:27017/myTestDB', {
    useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error', err)
});
db.once('open', function () {
    console.log(' database connected.');
});
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password1: {
        type: String,
        unique: true
    },
    repassword: {
        type: String,
        unique: true
    }

})
var User = mongoose.model('User', userSchema);

var productschema = new Schema({
    Id: {
        type: Number,
        unique: true
    },
    Productname: {
        type: String,
        unique: true
    },
    Owner: {
        type: String,
        unique: true
    },
    productUrl: {
        type: String,
        unique: true
    },
})

var Product = mongoose.model('Product', productschema);

app.use(express.static(path.join(__dirname, '/../Client/public')));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



app.get('/register', function (req, res) {
    res.sendFile(path.join(__dirname, '/../Client/safe.html'));
});

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '/../Client/safe_login.html'));

});

app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, '/../Client/home_page.html'));
});


app.get('/addpage', function (req, res) {
    console.log("hits the add page");
    res.sendFile(path.join(__dirname, '/../Client/add.html'));
});


app.get('/forgotpswd', function (req, res) {
    res.sendFile(path.join(__dirname, '/../Client/forgot-password.html'));
})


app.post('/insert_product', function (req, res) {
    console.log("insert method called---------");

    var product_first = new Product({
        Id: req.body.product_id,
        Productname: req.body.product_name,
        Owner: req.body.product_owner,
        Ownerid: req.body.product_ownerid,
        productUrl: req.body.product_url
    });
    product_first.save(function (err, data) {
        if (err) console.log(err);
        else console.log('Product Data Saved', data);
    });
});


app.get('/editpage/:id', function (req, res) {
    console.log("hits the edit page", req.params.id);

    // res.sendFile(path.join(__dirname, 'edit_page.html'));
    Product.findById(req.params.id, function (err, data) {
        if (err)
            res.send(err)
        else
            res.render(path.join(__dirname, '/../Client/edit_page.html'), {
                userData: data
            });
    });
});

app.delete('/del_product/:id', function (req, res) {
    console.log("hites the delete page");
    let id = req.params.id;
    console.log(id);
    Product.remove({
        _id: id
    }, function (err) {
        if (!err) {
            console.log("deleted successfully");
        } else {
            console.log("error");
        }
    });

});




app.get('/all_product', function (req, res) {

    var all_data = Product.find({}, (function (err, get) {
        if (err) {
            console.log(err);
        }
        if (get) {

            res.send(get);
        }
    }));

});



app.put('/update_product/:id', function (req, res) {

    console.log("--------------");
    console.log(req.body);
    Product.findOneAndUpdate({
        _id: req.params.id

    }, {
        $set: {
            Productname: req.body.product_name,
            Owner: req.body.product_owner,
            productUrl: req.body.product_url
        }
    }, function (err, data) {

        if (err)
            res.send(err)
        else
            console.log('Product updated.');
    });
});

app.post('/user_register1', function (req, res) {
    console.log("post method called........");
    var email_id = req.body.email;

    var first = new User({
        name: req.body.name,
        email: req.body.email,
        password1: req.body.pass,
        repassword: req.body.repass
    });
    console.log(first);
    first.save(function (err, data) {
        if (err) console.log(err);
        else console.log('Saved : ', data);
    });

    var result1 = {
        message: 'registered successfully'
    }
    console.log(email_check);
    var email_check = User.findOne({
        email: email_id
    });
    email_check.exec(function (err, user1) {
        if (err) {
            console.log("not determined");
        }
        if (user1) {
            var result1 = {
                message: 'Email exists'
            }
            res.send(result1);
        }
    })




});

app.post('/check_login', function (req, res) {
    console.log("login method called........");
    var email_id = req.body.email;
    var password = req.body.pass;

    var check = User.findOne({
        email: email_id,
        password1: password
    });

    check.exec(function (err, user) {

        if (err) {
            console.log("query not found");
        }
        if (!user) {
            var not_exists = {
                message: 'Email exists'
            }
            res.send(not_exists);
        } else {
            console.log(user);
            res.send(user);


        }
    });


});


var server = app.listen(5000);
console.log(" server running at  port5000");