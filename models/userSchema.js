const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true
    },
    address:{
        lineone: String,
        linetwo: String,
        city: String,
        state: String,
        pincode: Number
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

const User = mongoose.model('user',userSchema);

module.exports = User