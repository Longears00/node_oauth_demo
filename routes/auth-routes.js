
const router = require('express').Router();
const passport = require('passport');

//auth Login
router.get('/login', (req, res)=> {
  res.render('login');
});

//auth Logout
router.get('/logout', (req, res)=> {

});

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile'],
  }));

module.exports = router;
