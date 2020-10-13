const express = require('express');
const router = express.Router();
const goalsCtrl = require('../../controllers/api/goals');

//protected routes
/* GET /api/goals */
router.use(require('../../config/auth'));
router.get('/', checkAuth, goalsCtrl.index);
router.post('/', checkAuth, goalsCtrl.create);
router.use(require('../../config/auth'));
router.delete('/:id', goalsCtrl.delete);
router.put('/:id', goalsCtrl.update);

//helper functions
function checkAuth(req, res, next) {
  console.log(req.user);
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;