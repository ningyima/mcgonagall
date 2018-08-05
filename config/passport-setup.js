const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GoogleOAuth = require('../config');
const User = require('../db/helpers');

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
        // passport cb function
    console.log('Passport Callback Function Fired');
    // check if user already exist in DB

    // create user object based on google info
    // pass to db.saveUser
    const userObj = {
      googleId: profile.id,
      username: profile.displayName,
      profileImageUrl: profile.photos[0].value,
    }
    User.saveUser(userObj).then((currentUser) => {
      console.log('user exist: ', currentUser);
      done(null, currentUser);
    }).catch(error => {
      console.log('myerror', error);
      done(error, null);
    });
  }),
);
