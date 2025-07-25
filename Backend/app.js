const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const connectToDB=require("./db/db")
connectToDB();
const app = express();
const cors=require("cors")
app.use(cors());

const paymentRoutes = require('./Routes/Payment.routes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Razorpay Payment Integration');
});
app.use('/api/payments', paymentRoutes);


module.exports = app;