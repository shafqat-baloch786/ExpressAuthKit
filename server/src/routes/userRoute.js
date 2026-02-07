const { me } = require('../controllers/userController');
const auth = require('../middlewares/auth');
const express = require('express');
const router = express.Router();

// Get method one /me to fetch logged in user details
router.get('/me', auth, me);

module.exports = router;