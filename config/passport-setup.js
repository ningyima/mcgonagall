const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GoogleOAuth = require('../config');

passport.use(
  new GoogleStrategy({
    // options for GoogleStrategy
    clientID: GoogleOAuth.googlecredential.clientID,
    clientSecret: GoogleOAuth.googlecredential.clientSecret,
    callbackURL: '/auth/google/redirect',
  }, () => {
    // passport cb function
  }),
);
