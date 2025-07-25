require('dotenv').config();
const express = require('express');
const app = express();
const cors=require("cors")
app.use(cors());

const paymentRoutes = require('./Routes/Payment.routes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("🎉 Backend is deployed successfully!");
});
app.use('/api/payments', paymentRoutes);


module.exports = app;