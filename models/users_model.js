/**
 * Created by KIM on 2015-03-22.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username:{type:String,unique:true},
    email:String,
    color:String,
    hashed_password:String
});

mongoose.model('User',UserSchema);