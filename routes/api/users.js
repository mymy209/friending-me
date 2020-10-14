//ALL COMPLETED
const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const usersCtrl = require('../../controllers/users');


router.use(require('../../config/auth'));
/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);


/*---------- Protected Routes ----------*/
router.get('/profile', checkAuth, usersCtrl.profile);

function checkAuth(req, res, next) {
    console.log(req.user);
      if (req.user) return next();
      return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;