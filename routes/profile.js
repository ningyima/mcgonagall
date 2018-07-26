const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(`${req.user.username} is logged in!`);
});

module.exports = router;
