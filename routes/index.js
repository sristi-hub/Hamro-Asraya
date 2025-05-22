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

 if(req.params._id==hostelData.id){
   res.render('Hostel_view/hostel_view.ejs', {
    title: 'Hostel List',
    hostels: hostelData.hostels
  });
  res.send(400)
 }
});

module.exports = router;
