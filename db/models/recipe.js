const db = require('../schema');

const Recipe = db.Model.extend({
  tableName: 'Recipes',
  hasTimeStamps: true,
});

module.exports = db.model('Recipe', Recipe);