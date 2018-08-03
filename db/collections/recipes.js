const db = require('../schema');
const Recipe = require('../models/recipe');

const Recipes = new db.Collection();

Recipes.model = Recipe;

module.exports = Recipes;