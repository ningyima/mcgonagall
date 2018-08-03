const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GoogleOAuth = require('../config');
const User = require('../database/db');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy({
    // options for GoogleStrategy
    clientID: GoogleOAuth.googlecredential.clientID,
    clientSecret: GoogleOAuth.googlecredential.clientSecret,
    callbackURL: '/auth/google/callback',
  }, (accessToken, refreshToken, profile, done) => {
    console.log('accessToken, refreshToken, profile: ', accessToken, refreshToken, profile);
    // passport cb function
    console.log('Passport Callback Function Fired');
    // check if user already exist in DB
    User.findOne({ googleId: profile.id }).then((currentUser) => {
      if (currentUser) {
        // user exist
        console.log('user exist: ', currentUser);
        done(null, currentUser);
      } else {
        // create user in DB
        new User({
          googleId: profile.id,
          username: profile.displayName,
        }).save().then((newUser) => {
          console.log('New user created: ', newUser);
          done(null, newUser);
        });
      }
    });
  }),
);
