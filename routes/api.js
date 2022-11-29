const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// TEST
router.get('/test', ctrl.auth.test);

// Create User (SignUp)
router.post('/signup', ctrl.auth.signup);

router.post('/log', ctrl.auth.log);


module.exports = router;