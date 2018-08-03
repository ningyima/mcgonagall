const db = require('../schema');

const Business = db.Model.extend({
  tableName: 'Businesses',
  hasTimeStamps: true,
});

module.exports = db.model('Business', Business);