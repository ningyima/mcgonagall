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

module.exports = router;
