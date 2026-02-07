const { register, login } = require('../controllers/authController');
const express = require('express');
const router = express.Router();



// Post method on /register to register a new user
router.post('/register', register);

// Post method on /login
router.post('/login', login);


module.exports = router;