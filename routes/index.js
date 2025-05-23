var express = require('express');
var router = express.Router();
const hostelData=require("../models/hostel")

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


// Route to display list of Hotels
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express', hostels: hostelData.hostels });
});

// Route to render hostels using static data
router.get('/hostels', function (req, res, next) {
  res.render('Home/hostel_list', {
    title: 'Hostel List',
    hostels: hostelData.hostels
  });
});

router.get('/explore', function (req, res, next) {
  res.render('Explore/sort_hostel.ejs', {
    title: 'Hostel List',
    hostels: hostelData.hostels
  });
});
router.get('/hostel/:_id', function (req, res, next) {
  const hostelId = req.params._id;
  const hostel = hostelData.hostels.find(h => h.id === hostelId);
  if (!hostel) {
    return res.status(404).send('Hostel not found');
  }
  res.render('Hostel_view/hostel_view', {
    title: hostel.name,
    hostel: hostel
  });
});

router.get('/signup', function (req, res, next) {
  res.render('Sign_Up/sign_up.ejs', {
    title: 'Hostel List',
    hostels: hostelData.hostels
  });
});


router.get('/hostel/payment/:_id', function(req, res, next) {
   const hostelId = req.params._id;
  const hostel = hostelData.hostels.find(h => h.id === hostelId);
  if (!hostel) {
    return res.status(404).send('Hostel not found');
  }
  res.render('Hostel_payment/payment.ejs', {
    title: hostel.name,
    hostel: hostel
  });
});
module.exports = router;
