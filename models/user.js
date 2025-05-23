// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone:String
//   // add other fields according to your DB
// }, { collection: 'studentUser' });

// module.exports = mongoose.model('User', userSchema);


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740'
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  dateJoined: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'studentUser', // Specify exact collection name
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);  // Collection: user
