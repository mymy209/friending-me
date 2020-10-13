const express = require('express');
const router = express.Router();
const goalsCtrl = require('../../controllers/api/goals');

//protected routes
/* GET /api/goals */
router.use(require('../../config/auth'));
router.get('/', checkAuth, goalsCtrl.index);
router.post('/', goalsCtrl.create);

//helper functions
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;