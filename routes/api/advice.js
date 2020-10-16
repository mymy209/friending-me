const express = require('express');
const router = express.Router();
const adviceCtrl = require('../../controllers/api/advice');

router.get('/', adviceCtrl.index);

module.exports = router;