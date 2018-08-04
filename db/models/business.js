const db = require('../schema');

const Business = db.Model.extend({
  tableName: 'Businesses',
  hasTimeStamps: true,
});

module.exports = Business;