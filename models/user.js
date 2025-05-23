const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  paymentId: {
    type: String,
    required: true
  },
  amountPaid: {
    type: Number,
    required: true
  },
  paymentDate: {
    type: Date,
    required: true
  },
  paymentMethod: {
    type: String,
    enum: ["Esewa", "Khalti", "Cash", "Bank Transfer"], // Add more if needed
    required: true
  },
  status: {
    type: String,
    enum: ["Paid", "Pending", "Failed"],
    default: "Pending"
  }
});

const userPaymentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  hostelId: {
    type: String,
    required: true
  },
  hostelName: {
    type: String,
    required: true
  },
  roomType: {
    type: String,
    enum: ["Single", "Double", "Triple"],
    required: true
  },
  monthlyRent: {
    type: Number,
    required: true
  },
  payment: {
    type: paymentSchema,
    required: true
  }
});

const Payment = mongoose.model("Payment", userPaymentSchema);

module.exports = Payment;
