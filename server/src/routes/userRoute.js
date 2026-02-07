const { me } = require('../controllers/userController');
const auth = require('../middlewares/auth');
const role = require('../middlewares/role');
const express = require('express');
const router = express.Router();

// Get method one /me to fetch logged in user details
router.get('/me', auth, me);

// Do this if you want to test out the role middleware, you can add admin role manually in database
// router.get('/me', auth, role('admin'), me);

module.exports = router;