const db = require('../schema');
const User = require('./user');
const Business = require('./business');

const Event = db.Model.extend({
  tableName: 'Events',
  hasTimeStamps: true,
  business: function() {
    return this.belongsTo(Business, 'business_id');
  },
  user: function() {
    return this.belongsTo(User, 'user_id');
  }
});

module.exports = db.model('Event', Event);