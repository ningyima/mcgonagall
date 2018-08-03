// model for user
const db = require('../schema');

const User = db.Model.extend({
  tableName: 'Users',
  hasTimeStamps: true,
});

module.exports = db.model('User', User);
