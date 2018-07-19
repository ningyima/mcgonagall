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
  for (var prop in queryObj) {
    if (queryObj[prop] === undefined || queryObj[prop] === '') delete queryObj[prop];
  }
}

/**
 * [description]
 * @param  {[type]} ingredientList [description]
 * @return {[JSON object]} allergens [This is a list of all allergens identitied in the recipe ]
 */
let citeAllergens = (ingredientList) => {

  return allergens;
}

let getRecipeByIngredients = (ingredients, cb) => {
  var callback = function(err, res, body) {
    cb(err, res, body);
  };
  var queryObj = trimQryObj(ingredients); //remove any uninitialized keys
  let options = setOptions('recipes/findByIngredients?', queryObj);
  request(options, callback);
}

let getRecipes = (searchObj, cb) => {
  var callback = function(err, res, body) {
    if (err) {
      cb(err, res, body);
    }
    cb(err, res, body);
  };
  var queryObj = trimQryObj(searchObj); //remove any uninitialized keys
  let options = setOptions('recipes/search?', queryObj);
  request(options, callback);
}

let getRecipesByCalories = (calories, cb) => {
  var callback = function(err, res, body) {
    if (err) {
      console.log('there was an error retrieving recipes by calories', err);
      cb(err, res, body);
    }
    cb(err, res, body);
  };
  var queryObj = trimQryObj(calories); //remove any uninitialized keys
  let options = setOptions('recipes/mealplans/generate?', queryObj);
  request(options, callback);
}

//====================================================
//TEMPORARY TESTING DATA UNTIL SERVER.JS CAN BE UPDATED
//
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

getRecipes(search, function(error, res, body){
  console.log(body);
});
// getRecipeByIngredients(ingredients, function(error, res, body) {
//   if (error) { console.log('ERROR ', error);}
//   console.log(body);
// });
// getRecipesByCalories(calSearch, function(error, res, body) {
//   console.log(body);
// }); 
module.exports.getRecipes = getRecipes;