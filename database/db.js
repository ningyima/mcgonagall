const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mlab = require('../config.js');
// This could also be || if config doesnt exist;

mongoose.connect(mlab.mlabdb.mlab)
  .then(
    () => { console.log('mongoose connected'); },
    (err) => { console.log('DB connection error: ', err); },
  );

const userSchema = new Schema({
  googleId: String,
  username: String,
  createdAt: Date,
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model('user', userSchema);
userSchema.pre('save', (next) => {
  let now = Date.now();
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
