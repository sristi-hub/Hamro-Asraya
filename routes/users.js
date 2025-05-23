const express = require('express');
const router = express.Router();
const User = require('../models/user'); 

router.get('/user-list', async (req, res) => {
  try {
    const users = await User.find();
    res.render('Users/user', { title: 'User List', users });
  } catch (err) {
    res.status(500).send('Error retrieving user list');
  }
});

module.exports = router;
