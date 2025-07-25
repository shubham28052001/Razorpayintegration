const express = require('express');
const router = express.Router();
const paymentController = require("../Controller/Payment.controllers")

router.post('/create-order', paymentController.createOrder);
module.exports = router;