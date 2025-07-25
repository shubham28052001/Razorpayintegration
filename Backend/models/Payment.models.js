const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  anonymous: Boolean,
  amount: Number,
  tipPercentage: Number,
  totalAmount: Number,
  orderId: String,
  paymentId: String,
  status: {
    type: String,
    default: 'created',
  }
}, { timestamps: true });

module.exports = mongoose.model('Razorpay', OrderSchema);