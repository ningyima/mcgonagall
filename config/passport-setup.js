const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth');
const GoogleOAuth = require('../config');

passport.use(
  new GoogleStrategy({
    // options for GoogleStrategy
    clientID: GoogleOAuth.googlecredential.clientID,
    clientSecret: GoogleOAuth.googlecredential.clientSecret,
  }), () => {
    // passport cb function
  },
);
