var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/mydata', {

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
    name: String,
    age: Number,
    DOB: Date,
    isAlive: Boolean
});




var Schema = mongoose.Schema;
var customerSchema = new Schema({
    customerid: Number,
    name: String,
    age: Number,
    address: String,
    state: String,
    pincode: Number,

});
var productSchema = new Schema({
    productId: Number,
    productname: String,
    quantity: Number,
    cost: Number,
    producedplace: String,

})

var Schema = mongoose.Schema

userSchema.methods.isYounger = function () {
    return this.model('User').age < 50 ? true : false;
}



var User = mongoose.model('User', userSchema);
var Customer = mongoose.model('Customer', customerSchema);
var product = mongoose.model('Product', productSchema);

var aparna = new Customer({
    customerid: 1001,
    name: 'Aparna',
    age: 22,
    address: 'Annal ambedkar nagar muthialpet puducherry',
    state: 'puducherry',
    pincode: 605003
}, {
    strict: true
});


var sathish = new Customer({
    name: 'sathish',
    age: 21,
    address: 'usutheri puducherry',
    state: 'pudcuherry',
    pincode: 605003,
    phoneno: 8870614292
});

var arvind = new Customer({
    name: 'Arvind',
    age: 99,
    address: 'usutheri puducherry',
    state: 'pudcuherry',
    pincode: 605003,
    phoneno: 8870614292

});


var apple = new product({
    productId: 'A001',
    productname: 'Ooty Apple',
    quantity: 10,
    cost: 100,
    producedplace: 'ooty'


})
userSchema.pre('save', true, function (next, done) {
    // calling next kicks off the next middleware in parallel
    next();
});

aparna.save(function (err, data) {
    if (err) console.log(err);
    else console.log('  Customer record inserted', data)
});
sathish.save(function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log('Customer record inserted', data)
    }
});
apple.save(function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("Product Record Inserted")
    }
})

arvind.save(function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('User record inserted', data);
    }
});

//console.log('isYounger : ', arvind.isYounger());