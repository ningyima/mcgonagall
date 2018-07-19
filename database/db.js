const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test?connectTimeoutMS=5000&bufferCommands=false')
  .then(
    () => { console.log('mongoose connected'); },
    (err) => { console.log('DB connection error: ', err); },
  );

const userSchema = mongoose.Schema({
  // email: { type: String, required: true, unique: true },
  // name: { type: String },
  // tokenSeed: { type: String, required: true, unique: true },
  // created: { type: Date, default: () => new Date() },
  email: String,
  name: String,
  tokenSeed: String,
  created: Date,
});

const Users = mongoose.model('User', userSchema);
const findAllUsers = function (callback) {
  Users.find({}, (err, users) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, users);
    }
  }); 
};

const checkUser = (userId, callback) => {
  // construct query to pass to DB
  Users.find({ _id: '5b501b167a41dc2ff95047ed' }, (err, user) => {
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

module.exports.checkUser = checkUser;
module.exports.findAllUsers = findAllUsers;
module.exports.Users = Users;
