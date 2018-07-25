const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GoogleOAuth = require('../config');
const User = require('../database/db');

passport.use(
  new GoogleStrategy({
    // options for GoogleStrategy
    clientID: GoogleOAuth.googlecredential.clientID,
    clientSecret: GoogleOAuth.googlecredential.clientSecret,
    callbackURL: '/auth/google/callback',
  }, (accessToken, refreshToken, profile, done) => {
    // passport cb function
    console.log('Passport Callback Function Fired');
    // check if user already exist in DB
    User.findOne({ googleId: profile.id }).then((currentUser) => {
      if (currentUser) {
        // user exist
        console.log('user exist: ', currentUser);
      } else {
        // create user in DB
        new User({
          googleId: profile.id,
          username: profile.displayName,
        }).save().then((newUser) => {
          console.log('New user created: ', newUser);
        });
      }
    });
  }),
);
