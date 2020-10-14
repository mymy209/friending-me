const express = require('express');
const router = express.Router();
const logsCtrl = require('../../controllers/api/logs');

/* GET /api/logs */
router.get('/', checkAuth, logsCtrl.index);
router.post('/', checkAuth, logsCtrl.create);

//helper functions
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;