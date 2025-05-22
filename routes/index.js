var express = require('express');
var router = express.Router();
const hostelData=require("../models/hostel")

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


// Route to display list of Hotels
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Route to render hostels using static data
router.get('/hostels', function (req, res, next) {
  res.render('Home/hostel_list', {
    title: 'Hostel List',
    hostels: hostelData.hostels
  });
});
module.exports = router;
