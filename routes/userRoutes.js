// routes/userRoutes.js

// routes/userRoutes.js

const express = require('express');
const User = require('../model/model');
const router = express.Router();

// GET route for the home page
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.render('index', { message: null, error: null, users });
  } catch (err) {
    console.error('Error fetching user data:', err);
    res.status(500).render('index', { error: 'Error fetching user data', users: [] });
  }
});

// POST route for adding a user
router.post('/user', async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      age: req.body.age,
    });
    await newUser.save();
    res.render('index', { message: 'User data saved successfully!', error: null, users: await User.find() });
  } catch (err) {
    console.error('Error saving user data:', err);
    res.status(500).render('index', { error: 'Error saving user data', message: null, users: [] });
  }
});

// GET route for displaying user data in a separate view
router.get('/userdata', async (req, res) => {
  try {
    const users = await User.find();
    res.render('userdata', { users, error: null });  
  } catch (err) {
    console.error('Error fetching user data:', err);
    res.status(500).render('userdata', { error: 'Error fetching user data', users: [] });
  }
});

module.exports = router;
