const db = require('../schema');

const Favorite = db.Model.extend({
  tableName: 'LocalFavorites',
  hasTimeStamps: true,
});

module.exports = Favorite;