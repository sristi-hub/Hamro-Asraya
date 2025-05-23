var express = require('express');
var router = express.Router();
const Hostel=require("../models/hostel")

// Homepage route
router.get('/', async function(req, res, next) {
  try {
    const hostels = await Hostel.find();
    res.render('home', { title: 'Express', hostels });
  } catch (err) {
    next(err);
  }
});

// Hostel list page
router.get('/hostels', async function(req, res, next) {
  try {
    const hostels = await Hostel.find();
    res.render('Home/hostel_list', {
      title: 'Hostel List',
      hostels
    });
  } catch (err) {
    next(err);
  }
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

// Individual hostel view page
router.get('/hostel/:_id', async function(req, res, next) {
  try {
    const hostel = await Hostel.findOne({ _id: req.params._id });
    if (!hostel) {
      return res.status(404).send('Hostel not found');
    }
    res.render('Hostel_view/hostel_view', {
      title: hostel.name,
      hostel
    });
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
