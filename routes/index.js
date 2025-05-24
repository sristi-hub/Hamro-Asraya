var express = require('express');
var router = express.Router();
const Hostel = require("../models/hostel");
const Review = require("../models/review");

// Homepage route
router.get('/', async function(req, res, next) {
  try {
    const hostels = await Hostel.find();
    res.render('home', { title: 'Express', hostels,
      activePage: 'home' 
     });
  } catch (err) {
    next(err);
  }
});

router.get('/signup', function (req, res, next) {
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
router.get('/explore', exploreHandler);
router.get('/hostel/explore', exploreHandler);

async function exploreHandler(req, res, next) {
  try {
    const hostels = await Hostel.find();
    res.render('Explore/sort_hostel', {
      title: 'Hostel List',
      hostels,
      activePage: 'explore'
    });
  } catch (err) {
    next(err);
  }
};

router.post('/explore', async function(req, res, next) {
  try {
    const hostels = await Hostel.find();
    res.render('Explore/sort_hostel', {
      title: 'Hostel List',
      hostels,
      activePage: 'explore'
    });
  } catch (err) {
    next(err);
  }
});


// /explore/female
router.get('/explore/:gender', async (req, res) => {
  const genderParam = req.params.gender.toLowerCase(); // ensure input is lowercase
  const genderArray = genderParam.split(','); // e.g., ['female', 'male']

  let query = {};

  if (genderParam !== 'all') {
    query = {
      $expr: {
        $in: [
          { $toLower: "$gender" },
          genderArray
        ]
      }
    };
  }

  try {
    const hostels = await Hostel.find(query);
    res.render('Explore/sort_hostel', {
      hostels,
      activePage: 'explore',
      selectedGenders: genderArray,
    });
  } catch (error) {
    res.status(500).send("Error fetching hostels");
  }
});





router.get('/verify', async function(req, res, next) {
  try {
    const hostels = await Hostel.find();
    res.render('verification_form/verification_form.ejs', {
      title: 'Hostel List',
      hostels
    });
  } catch (err) {
    next(err);
  }
});

router.post('/verify2', async function(req, res, next) {
  try {
    const hostels = await Hostel.find();
    res.render('verification_form/2verification.ejs', {
      title: 'Hostel List',
      hostels
    });
  } catch (err) {
    next(err);
  }
});


router.post('/verify3', async function(req, res, next) {
  try {
    const hostels = await Hostel.find();
    res.render('verification_form/3verification.ejs', {
      title: 'Hostel List',
      hostels
    });
  } catch (err) {
    next(err);
  }
});

router.post('/complever', async function(req, res, next) {
  try {
    const hostels = await Hostel.find();
    res.render('verification_form/complever.ejs', {
      title: 'Hostel List',
      hostels
    });
  } catch (err) {
    next(err);
  }
});


function isAuthenticated(req, res, next) {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next(); // User is logged in
  }
  res.redirect('/log_in'); // Redirect if not logged in
}

// Individual hostel view page with reviews
router.get('/hostel/:id', async (req, res) => {
  const hostel = await Hostel.findById(req.params.id);
  const reviews = await Review.find({ hostelId: hostel.id });

  res.render('Hostel_view/hostel_view', {user: req.user || null, hostel, reviews ,activePage: 'hostels' });
});





// Payment page
router.get('/payment/:id', async function(req, res, next) {
  try {
    const hostel = await Hostel.findById(req.params.id);
    if (!hostel) {
      return res.status(404).send('Hostel not found');
    }

    res.render('Hostel_payment/payment.ejs', {
      user: req.user || null,
      hostel
    });
  } catch (err) {
    next(err);
  }
});



module.exports = router;
