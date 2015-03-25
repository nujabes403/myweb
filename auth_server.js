/**
 * Created by KIM on 2015-03-22.
 */
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);

require('./models/users_model.js');
var db = mongoose.connect('mongodb://localhost/myapp');

var app = express();
app.engine('html',require('ejs').__express);
app.set('view engine','html');
app.set('views',__dirname + '/views');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'SECRET',
    store:new mongoStore({
        db:'myapp',
        collection:'sessions',
        maxAge:300000
    })
}));
require('./routes')(app);
app.listen(80);
console.log("SERVER RUNNING!");
