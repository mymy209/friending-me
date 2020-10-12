const express = require('express');
const router = express.Router();
const goalsCtrl = require('../../controllers/api/goals');

/* GET /api/goals */
router.get('/', goalsCtrl.index);

module.exports = router;