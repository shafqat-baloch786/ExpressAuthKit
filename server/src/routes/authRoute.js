const { register } = require('../controllers/authController');
const express = require('express');
const router = express.Router();



// Post method on /register to register a new user
router.post('/register', register);


module.exports = router;