const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    items: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product',
          },
          quantity: {
            type: Number,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      ],
    total: {
        type: Number,
        required: true,
        default: 0,
    },
},{timestamps:true});

const Cart = mongoose.model('cart',cartSchema);
module.exports = Cart