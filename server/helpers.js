const request = require('request');
const keys = require('../config.js')


/**
 * this function is used to refactor common code out of all the API query functions.  Here all optins including the URL, query string and headers are initializes
 * @param  {String} url         The path to the appropriate API route for the specific request we are processing
 * @param  {Object} queryString This is the actual query object containing all the query parameters to the API
 * @return {Object}      The complete set of options to be used in our respective API get requests
 */
let setOptions = (url = '', queryString) => {
  let options = {
    url:'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/'+ url,
    qs: queryString,
    headers: keys.API_KEYS
  }
  return options;
}

/**
 * This is a helper function which removes unnecessary object properties (those that are empty or undefined) from our query object before it is used to query the API
 * @param  {Object} queryObj THis is the query object received as part of the client request object to the server
 * @return {Object}   returns another object which represents the minified query object after all unnecessary fields have been removed.
 */
let trimQryObj = (queryObj) => {
  var result = {};
  for (var prop in queryObj) {
    if (queryObj[prop] !== undefined && queryObj[prop] !== '') {
      result[prop] = queryObj[prop];
    }
  }
  return result;
}

/** myFilter is a helper function used to trim undesired data from API results before transmitting final result to the client. Desired properties are recipe id, title, price er servine, time to prepare, numnber of servings, calorie count, total likes, detailed ingredients list, and detailed preparaion instructions  
*  @param  {Object}   fullRecipe The complete recipe object returned from the API 
*/
let myFilter = (fullRecipe) => {
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
 [This is a list of all allergens identitied in the recipe ]
 */
let citeAllergens = (ingredientList) => {

  return allergens;
}

/** query the API using the 'Search Recipes Complex' GET query.  This query counts as 3 API calls ... EXPENSIVE consider having this feature available only to paid subscribers
*  
* @param  {Object}   searchObj [query parameters for the API get request]
* @param  {Function} cb        [used to process and return query results to the client]
*/
let getRecipesComplex = (searchObj, cb) => {
  var callback = function(err, res, body) {
    cb(err, body);
  };
  var queryObj = trimQryObj(searchObj);
  let options = setOptions('recipes/searchComplex?', queryObj);
  request(options, callback);
}

/** query the API using the list of ingredients supplied and the 'Search Recipes by Ingredients' GET query.
* @param  {Object} ingredients [query parameters for the API get request]
* @param  {Function} cb        [used to process and return query results to the client]*/
let getRecipesByIngredients = (ingredients, cb) => {
  var callback = function(err, res, body) {
    cb(err, body);
  };
  var queryObj = trimQryObj(ingredients); //remove any uninitialized keys
  let options = setOptions('recipes/findByIngredients?', queryObj);
  request(options, callback);
}

/**
 * query the API using the 'Search Recipes' GET query, based on dynamic data entered via the first search option on the UI.  This query does not require calorie information and so counts as only 1 API call.
  @param  {Object}   searchObj [query parameters for the API get request]
* @param  {Function} cb        [used to process and return query results to the client]
 */
let getRecipes = (searchObj, cb) => {
  var callback = function(err, res, body) {
    cb(err, body);
  };
  var queryObj = trimQryObj(searchObj); //remove any uninitialized keys
  console.log('Show trimmed queryOBJ: ', queryObj);
  let options = setOptions('recipes/search?', queryObj);
  request(options, callback);
}

/** query the API using the 'Generate Meal Plan' GET query. The query accepts the total desired daily calories and can return a one day meal plan (3 meals) or a week long plan (21 meals)
* @param  {Object}  calories [query parameters for the API get request]
* @param  {Function} cb        [used to process and return query results to the client]
*/
let getRecipesByCalories = (calories, cb) => {
  var callback = function(err, res, body) {
    cb(err, body);
  };
  console.log('inside grbc');
  var queryObj = trimQryObj(calories); //remove any uninitialized keys
  let options = setOptions('recipes/mealplans/generate?', queryObj);
  request(options, callback);
}


/**
 * Query the API using the 'Get Recipe Information' GET request to retrieve all the details of the actual recipe preparation and ingredients.
 * @param  {String}   recipeId The unique recipe identifier supplied by the client
 * @param  {Function} cb     used to process and return query results to the client
 */
let getRecipeById = (recipeId, cb) => {
  var callback = function(err, res, body) {
    cb(err, body);
  };
  let options = setOptions('recipes/'+recipeId+'/information?', {includeNutrition: true });
  request(options, callback);
}


module.exports.myFilter = myFilter;
module.exports.getRecipeById = getRecipeById;
module.exports.getRecipesByCalories = getRecipesByCalories;
module.exports.getRecipesComplex = getRecipesComplex;
module.exports.getRecipesByIngredients = getRecipesByIngredients;
module.exports.citeAllergens = citeAllergens;
module.exports.getRecipes = getRecipes;
