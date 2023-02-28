const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  orders: {
    type: [mongoose.Schema.Types.ObjectId],
    ref:'order'
  },
},{timestamps:true});

const Staff = mongoose.model('staff', StaffSchema);
module.exports = Staff