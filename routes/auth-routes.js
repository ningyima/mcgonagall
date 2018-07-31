const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
  res.send('/auth/login - main login route');
  // db.checkUser(req.query.email, (err, user) => {
  //   if (err) {
  //     res.send(err);
  //   } else {
  //     res.send(user);
  //   }
  // });
});

// auth logout
router.get('/logout', (req, res) => {
  // handle with passport
  res.send('logged out');
});

// auth google
router.get('/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/plus.login'],
}));

// callback route for google to redirect to
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  // res.send(req.user);
  res.redirect('/');
});

// auth facebook
router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback', passport.authenticate('facebook'), (req, res) => {
  // console.log(res);
  // res.send(req.user);
  res.redirect('/');
});

module.exports = router;
