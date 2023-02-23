const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const productSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    slug:{
        type: String,
        slug:'title'
    },
    image: String,
    description:{
        type:String,
        required:String
    },
    price: {
        type:Number,
        required: true
    },
    onSale:{
        type: Boolean,
        require: true,
        default: false
    },
    discount:{
        type: Number
    }
},{timestamps:true});

const Product = mongoose.model('product', productSchema);
module.exports = Product

