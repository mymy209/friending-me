const express = require('express');
const router = express.Router();
const logsCtrl = require('../../controllers/api/logs');

/* GET /api/logs */
router.get('/', logsCtrl.index);

module.exports = router;