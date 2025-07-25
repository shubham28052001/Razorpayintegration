const Razorpay = require('razorpay');

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports.createOrder = async (data) => {
  const { name, email, phone, amount, tip, anonymous, address } = data;

  const tipAmount = Math.round(amount * (tip / 100));
  const totalAmount = Math.round(amount + tipAmount);

  const options = {
    amount: totalAmount * 100, 
    currency: 'INR',
    receipt: `receipt_${Date.now()}`,
    notes: {
      name: anonymous ? 'Anonymous' : name,
      email: anonymous ? 'Hidden' : email,
      phone,
      address,
      tipPercentage: tip,
    },
  };

  console.log("🔧 Razorpay Order Options:", options);

  const order = await razorpayInstance.orders.create(options);

  return {
    success: true,
    orderId: order.id,
    key: process.env.RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: order.currency,
    name: anonymous ? 'Anonymous Donor' : name,
    notes: options.notes,
  };
};
