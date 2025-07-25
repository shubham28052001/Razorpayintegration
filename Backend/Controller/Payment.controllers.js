const PaymentService = require('../Services/Payment.services');
module.exports.createOrder= async (req, res) => {

const { name, email, phone, amount, tip } = req.body;
if (!name || !email || !phone || !amount || tip === undefined) {
  return res.status(400).json({ error: "Missing required fields" });
}
try{
    const order= await PaymentService.createOrder(req.body);
    res.status(200).json(order);
}catch(error){
    console.error("Error in createOrder:", error);
    res.status(500).json({ error: "Internal Server Error" });
}
};


