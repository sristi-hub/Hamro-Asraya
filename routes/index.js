var express = require('express');
var router = express.Router();
const Hostel=require("../models/hostel")
const Review=require("../models/review")

// Homepage route
router.get('/', async function(req, res, next) {
  try {
    const hostels = await Hostel.find();
    res.render('home', { title: 'Express', hostels });
  } catch (err) {
    next(err);
  }
});

router.get('/sign_up', function (req, res, next) {
  res.render('Sign_Up/sign_up.ejs', {
    // title: 'Hostel List',
    // hostels: hostelData.hostels
  });
});


router.get('/log_in', function (req, res, next) {
  res.render('Sign_Up/log_in', {
    // title: 'Hostel List',
    // hostels: hostelData.hostels
  });
});





// Explore/sort page
router.get('/explore', async function(req, res, next) {
  try {
    const hostels = await Hostel.find();
    res.render('Explore/sort_hostel.ejs', {
      title: 'Hostel List',
      hostels
    });
  } catch (err) {
    next(err);
  }
});


router.get('/hostel/:_id', async function(req, res, next) {
  try {
    const hostelId = req.params._id;

    // Find the hostel
    const hostel = await Hostel.findById(hostelId);
    if (!hostel) {
      return res.status(404).send('Hostel not found');
    }

    // Find reviews for the hostel
    const reviews = await Review.find({ hostel: hostelId }).sort({ createdAt: -1 });

    // Render hostel view page and pass reviews
    res.render('Hostel_view/hostel_view', {
      title: hostel.name,
      hostel,
      reviews: reviews,     });
  } catch (err) {
    next(err);
  }
});

// Payment page
router.get('/hostel/payment/:_id', async function(req, res, next) {
  try {
    const hostel = await Hostel.findOne({ _id: req.params._id });
    if (!hostel) {
      return res.status(404).send('Hostel not found');
    }
    res.render('Hostel_payment/payment.ejs', {
      title: hostel.name,
      hostel
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
