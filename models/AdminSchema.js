const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true
    },
    isAdmin:{
        type:String,
        required:true,
        default: true
    }
},{timestamps:true});

const Admin = mongoose.model('admin',AdminSchema);