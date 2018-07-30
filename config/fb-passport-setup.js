const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const FacebookOAuth = require('../config');
const User = require('../database/db');

passport.use(new FacebookStrategy({
  clientID: FacebookOAuth.facebookcredential.clientID,
  clientSecret: FacebookOAuth.facebookcredential.clientSecret,
  callbackURL: '/auth/facebook/callback',
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ facebookId: profile.id }).then((currentUser) => {
    if (currentUser) {
      // fb user exist
      console.log('Facebook user exist: ', currentUser);
      done(null, currentUser);
    } else {
      // create fb user in DB
      new User({
        facebookId: profile.id,
        username: profile.displayName,
      }).save().then((newUser) => {
        console.log('New user created via FBOAuth2: ', newUser);
        done(null, newUser);
      });
    }
  });
}));