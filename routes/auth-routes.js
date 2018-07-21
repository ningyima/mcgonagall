const router = require('express').Router();


// auth login
router.get('/login', (req, res) => {
  res.render('login');
  // db.checkUser(req.query.email, (err, user) => {
  //   if (err) {
  //     res.send(err);
  //   } else {
  //     res.send(user);
  //   }
  // });
});

// auth login
router.get('/logout', (req, res) => {
  // handle with passport
  res.send('logged out');
});

// auth google
router.get('/google', (req, res) => {
  // handle with passport
  res.send('log in with google');
});

module.exports = router;
