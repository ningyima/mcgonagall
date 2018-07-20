const request = require('request');


let setOptions = (url = '', queryString) => {
  let options = {
    url:'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/'+ url,
    qs: queryString,
    headers: {
      'X-Mashape-Key': 'F7lzyXR2Olmshk6zl2Sk9qmpQDanp16lHAYjsn1Gmzsv5pxpwe',
      'X-Mashape-Host': 'spoonacular-recipe-food-nutrition-v1.p.mashape.com'
    }
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
  minRecipe['instructions'] = fullRecipe['instructions'];
  minRecipe['analyzedInstructions'] = fullRecipe['analyzedInstructions'][0].steps;
  minRecipe['analyzedInstructions'].forEach(function(step) {
    for (var key in step) {
      if (key !== 'number' && key !== 'step') {
      delete step[key];
      }
    }
  });
  minRecipe['aggregateLikes'] = fullRecipe['aggregateLikes'];
  minRecipe['spoonacularScore'] = fullRecipe['spoonacularScore'];
  minRecipe['extendedIngredients'] = fullRecipe['extendedIngredients'];
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
  let options = setOptions('recipes/'+recipeId+'/information?', {includeNutrition: false });
  request(options, callback);
}
module.exports._filter = _filter;
module.exports.getRecipeById = getRecipeById;
module.exports.getRecipesByCalories = getRecipesByCalories;
module.exports.getRecipesByIngredients = getRecipesByIngredients;
module.exports.citeAllergens = citeAllergens;
module.exports.getRecipes = getRecipes;