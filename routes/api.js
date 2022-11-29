const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// TEST
router.get('/test', ctrl.views.test);


module.exports = router;