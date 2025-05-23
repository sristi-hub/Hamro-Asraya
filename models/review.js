const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  hostel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hostel',
    required: true
  },
  reviewerName: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740'
  },
  rating: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
}, {
    collection: 'reviews',
  timestamps: true
});

module.exports = mongoose.model('Reviews', reviewSchema);  // Collection: reviews
