const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mlab = require('../config.js');
// This could also be || if config doesnt exist;

mongoose.connect(`mongodb://localhost/recipetest`)
  .then(
    () => { console.log('mongoose connected'); },
    (err) => { console.log('DB connection error: ', err); },
  );

/**
 * mongoose userSchema
 */
const userSchema = new Schema({
  googleId: String, 
  //googleToken: String,
  facebookId: String,
  //facebookToken: String, 
  username: String,
  savedRecipes: Array,
  intolerances: { type: String, default: 'egg, peanut' },
  //Develop Pseudo Query for editing intolerances 
  createdAt: Date,
  updatedAt: { type: Date, default: Date.now },
});

/**
 * The following User object is using a mongoose query
 * 'hook' to get NOW time or instantiate it if not
 * already done when the user model is being called on
 * user creation in DB.
 */
const User = mongoose.model('user', userSchema);
userSchema.pre('save', (next) => {
  const now = Date.now();
  this.updatedAt = now;

  // set value for createdAt only if it is null
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

const checkUser = (userId, callback) => {
  // construct query to pass to DB
  User.find({ googleId: userId }, (err, user) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, user);
      console.log('success user found');
    }
  });
  // connect to DB and make query.

  // run callback with results
};

module.exports = checkUser;
module.exports = User;
