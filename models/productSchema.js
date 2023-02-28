const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug)

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
    quantity:{
        type: Number,
        required: true,
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
        type: Number,
        default:0
    },
    reviews:{
        type: mongoose.Schema.Types.ObjectId
    }
},{timestamps:true});

const Product = mongoose.model('product', productSchema);
module.exports = Product

