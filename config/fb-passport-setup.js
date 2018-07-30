const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const FacebookOAuth = require('../config');
const User = require('../database/db');

/**
 * .serializeUser is taking a user that has been
 * authenticated and creating a session with
 * retrieved user info.
 */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

/**
 * .deserializeUser reads session cookie serial hash id
 * fully to fully authenticate user. A query is passed to
 * MongoDB as part of this process to verify user.
 */
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

/**
 * This portion passport method initiates the
 * FacebookStrategy which is just calling the FB strategy
 *  that is handled by the passport component.
 * The object that is passed to the FB strategy holds
 * the actual FB client app settings and the unique
 * callback route URI. The callback passed to
 * FB strategy is responsible for passing crucial
 * social app info for session and of course the desired
 * profile for authorization.
 * \\\\

 */
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
