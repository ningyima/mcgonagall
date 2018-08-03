const db = require('../schema');
const Favorite = require('../models/favorite');

const Favorites = new db.Collection();

Favorites.model = Favorite;

module.exports = Favorites;