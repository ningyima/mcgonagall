const request = require('request');
const keys = require('../config.js')


let setOptions = (url = '', queryString) => {
  let options = {
    url:'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/'+ url,
    qs: queryString,
    headers: keys.API_KEYS
  }
  return options;
}


let trimQryObj = (queryObj) => {
  var result = {};
  for (var prop in queryObj) {
    if (queryObj[prop] !== undefined && queryObj[prop] !== '') {
      result[prop] = queryObj[prop];
    }
  }
  return result;
}

let _filter = (fullRecipe) => {
  var minRecipe = {};
  minRecipe['id'] = fullRecipe['id'];
  minRecipe['title'] = fullRecipe['title'];
  minRecipe['pricePerServing'] = fullRecipe['pricePerServing'];
  minRecipe['readyInMinutes'] = fullRecipe['readyInMinutes'];
  minRecipe['servings'] = fullRecipe['servings'];
  fullRecipe['nutrition']['nutrients'].forEach(function (nutrient) {
    if(nutrient.title === 'Calories') {
      minRecipe['calories'] = nutrient.amount;
      return;
    }
  });
  minRecipe['aggregateLikes'] = fullRecipe['aggregateLikes'];
  minRecipe['spoonacularScore'] = fullRecipe['spoonacularScore'];
  minRecipe['extendedIngredients'] = fullRecipe['extendedIngredients'];
  minRecipe['instructions'] = fullRecipe['instructions'];
  minRecipe['analyzedInstructions'] = fullRecipe['analyzedInstructions'][0].steps;
  
  minRecipe['analyzedInstructions'].forEach(function(step) {
    for (var key in step) {
      if (key !== 'number' && key !== 'step') {
      delete step[key];
      }
    }
  });
  minRecipe['extendedIngredients'].forEach(function(ingredients) {
    for (var key in ingredients) {
      if (key !== 'originalString' && key !== 'id') {
      delete ingredients[key];
      }
    }
  });
  return minRecipe;
}

/**
 * [description]
 * @param  {[type]} ingredientList [description]
 * @return {[JSON object]} allergens [This is a list of all allergens identitied in the recipe ]
 */
let citeAllergens = (ingredientList) => {

  return allergens;
}

let getRecipesComplex = (searchObj, cb) => {
  var callback = function(err, res, body) {
    cb(err, body);
  };
  var queryObj = trimQryObj(searchObj);
  let options = setOptions('recipes/searchComplex?', queryObj);
  request(options, callback);
}


let getRecipesByIngredients = (ingredients, cb) => {
  var callback = function(err, res, body) {
    cb(err, body);
  };
  var queryObj = trimQryObj(ingredients); //remove any uninitialized keys
  let options = setOptions('recipes/findByIngredients?', queryObj);
  request(options, callback);
}

let getRecipes = (searchObj, cb) => {
  var callback = function(err, res, body) {
    cb(err, body);
  };
  var queryObj = trimQryObj(searchObj); //remove any uninitialized keys
  let options = setOptions('recipes/search?', queryObj);
  request(options, callback);
}

let getRecipesByCalories = (calories, cb) => {
  var callback = function(err, res, body) {
    cb(err, body);
  };
  console.log('inside grbc');
  var queryObj = trimQryObj(calories); //remove any uninitialized keys
  let options = setOptions('recipes/mealplans/generate?', queryObj);
  request(options, callback);
}

let getRecipeById = (recipeId, cb) => {
  var callback = function(err, res, body) {
    cb(err, body);
  };
  let options = setOptions('recipes/'+recipeId+'/information?', {includeNutrition: true });
  request(options, callback);
}
module.exports._filter = _filter;
module.exports.getRecipeById = getRecipeById;
module.exports.getRecipesByCalories = getRecipesByCalories;
module.exports.getRecipesComplex = getRecipesComplex;
module.exports.getRecipesByIngredients = getRecipesByIngredients;
module.exports.citeAllergens = citeAllergens;
module.exports.getRecipes = getRecipes;