const request = require('request');
const keys = require('../config.js')


/**
 * this function is used to refactor common code out of all the API query functions.  Here all optins including the URL, query string and headers are initializes
 * @param  {String} url         The path to the appropriate API route for the specific request we are processing
 * @param  {Object} queryString This is the actual query object containing all the query parameters to the API
 * @return {Object}      The complete set of options to be used in our respective API get requests
 */
let setOptions = (search) => {
  let baseUrl = `http://api.yummly.com/v1/api/recipes?_app_id=${keys.API_KEYS.YummlyID}&_app_key=${keys.API_KEYS.YummlyKey}`;
  let querybase = '&q=';
  let query = search.recipeQuery.split(' ').join('+');
  let baseCuisine = '&allowedCuisine[]=cuisine^cuisine-'
  let cuisine = search.cuisine ? search.cuisine.toLowerCase() : null;
  let cuisineExists = cuisine ? baseCuisine + cuisine : 'git st';
  let fullUrl = baseUrl.concat(querybase, query, cuisineExists);

  return fullUrl;
}

var test = setOptions({recipeQuery: 'onion soup', cuisine: null})

console.log(test);

let getRecipes = (search, cb) => {
  var callback = function(err, res, body) {
    cb(err, body);
  };
  let options = setOptions(search);
  request(options, callback);
}


module.exports.getRecipes = getRecipes;
