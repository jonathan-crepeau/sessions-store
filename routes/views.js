const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Root
router.get('/', ctrl.views.root)

module.exports = router;