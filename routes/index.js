var express = require('express');
var router = express.Router();
const Hostel = require("../models/hostel");
const Review = require("../models/review");

// Homepage route
router.get('/', async function(req, res, next) {
  try {
    const hostels = await Hostel.find();
    res.render('home', { title: 'Express', hostels });
  } catch (err) {
    next(err);
  }
});

// Signup page
router.get('/signup', function (req, res, next) {
  res.render('Sign_Up/sign_up.ejs', {
    title: 'Sign Up'
  });
});

// Explore/sort page
router.get('/explore', exploreHandler);
router.get('/hostel/explore', exploreHandler);

async function exploreHandler(req, res, next) {
  try {
    const hostels = await Hostel.find();
    res.render('Explore/sort_hostel.ejs', {
      title: 'Hostel List',
      hostels
    });
  } catch (err) {
    next(err);
  }
}

// Individual hostel view page with reviews
router.get('/hostel/:id', async (req, res) => {
  const hostel = await Hostel.findById(req.params.id);
  const reviews = await Review.find({ hostelId: hostel._id });

  res.render('Hostel_view/hostel_view', { hostel, reviews });
});



// Payment page
router.get('/payment/:id', async function(req, res, next) {
  try {
    const hostel = await Hostel.findById(req.params.id);
    if (!hostel) {
      return res.status(404).send('Hostel not found');
    }

    res.render('Hostel_payment/payment.ejs', {
      
      hostel
    });
  } catch (err) {
    next(err);
  }
});



module.exports = router;
