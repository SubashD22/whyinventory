const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product',
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    rating: {
      type: Number,
      required: true,
      default: 5,
    },
    review: {
      type: String,
      required: true,
    },
    
},{timestamps:true});

const Review = mongoose.model('review',ReviewSchema)
