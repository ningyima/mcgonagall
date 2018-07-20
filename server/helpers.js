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

/**
 * [description]
 * @param  {[type]} ingredientList [description]
 * @return {[JSON object]} allergens [This is a list of all allergens identitied in the recipe ]
 */
let citeAllergens = (ingredientList) => {

  return allergens;
}
//recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1'
let getRecipeByIngredients = (ingredients, cb) => {
  var callback = function(err, res, body) {
    cb(err, res, body);
  };
  console.log(ingredients);
  var queryObj = trimQryObj(ingredients); //remove any uninitialized keys
  console.log(queryObj);
  let options = setOptions('recipes/findByIngredients?', queryObj);
  request(options, callback);
}

let getRecipes = (searchObj, cb) => {
  var callback = function(err, res, body) {
    cb(err, res, body);
  };
  var queryObj = trimQryObj(searchObj); //remove any uninitialized keys
  let options = setOptions('recipes/search?', queryObj);
  request(options, callback);
}

let getRecipesByCalories = (calories, cb) => {
  var callback = function(err, res, body) {
    cb(err, res, body);
  };
  var queryObj = trimQryObj(calories); //remove any uninitialized keys
  let options = setOptions('recipes/mealplans/generate?', queryObj);
  request(options, callback);
}

let getRecipeById = (recipeId, cb) => {
  var callback = function(err, res, body) {
    cb(err, res, body);
  };
  let options = setOptions('recipes/'+recipeId+'/information?', {includeNutrition: false });
  request(options, callback);
}

//====================================================
//TEMPORARY TESTING DATA UNTIL SERVER.JS CAN BE UPDATED
//

let recipeId = 507593;

let search = {
      diet: 'vegetarian',
      instructionsRequired: true,
      excludeIngredients: 'coconut',
      intolerances: ['egg', 'gluten'],
      number: 12,
      offset: 0,
      query: 'burger',
      type: 'main course'
  };

let calSearch = {
      targetCalories: 2000,
      timeFrame: 'week'
  };

let ingredients = {
  fillIngredients: false,
  ingredients: 'apples,flour,sugar'
};

// getRecipes(search, function(error, res, body){
// if (error) { console.log('SEARCH ERROR ', error);}
//   console.log(body);
// });
// getRecipeByIngredients(ingredients, function(error, res, body) {
//   if (error) { console.log('INGREDIENTS ERROR ', error);}
//   console.log(body);
// });
// getRecipesByCalories(calSearch, function(error, res, body) {
//   if (error) { console.log('CALORIE ERROR ', error);}
//   console.log(body);
// }); 

// getRecipeById(recipeId, function(error, res, body) {
//   if (error) { console.log('RECIPE ID ERROR ', error);}
//   console.log(body);
// });

module.exports.getRecipes = getRecipes;