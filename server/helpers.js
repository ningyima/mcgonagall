const request = require('request');
const keys = require('../config.js');
const db = require('../db/helpers');


/**
 * this function is used to refactor common code out of all the API query functions.  Here all optins including the URL, query string and headers are initializes
 * @param  {String} url         The path to the appropriate API route for the specific request we are processing
 * @param  {Object} queryString This is the actual query object containing all the query parameters to the API
 * @return {Object}      The complete set of options to be used in our respective API get requests
 */
let setOptions = (search) => {
  console.log('what is search', search.query, search.cuisine)
  let baseUrl = `http://api.yummly.com/v1/api/recipes?_app_id=${keys.API_KEYS.YummlyID}&_app_key=${keys.API_KEYS.YummlyKey}`;
  let querybase = '&q=';
  let query = search.query.split(' ').join('+');
  let baseCuisine = '&allowedCuisine[]=cuisine^cuisine-'
  let cuisine = search.cuisine ? search.cuisine.toLowerCase() : null;
  let cuisineExists = cuisine ? baseCuisine + cuisine : 'git st';
  let fullUrl = baseUrl.concat(querybase, query, cuisineExists);

  return fullUrl;
}

let getRecipes = (search, cb) => {
  var callback = function(err, res, body) {
    cb(err, body);
  };
  let options = setOptions(search);
  request(options, callback);
}

// function to save business to db
// or function to hit yelp api, convert yelp info to the proper
// object keys for saving to db, then call db.saveBusiness()

// function to save zipcode
const saveZipcode = (zipObj, cb) => {
  db.saveFavorite(zipObj)
    .then(data => cb(null, data))
    .catch(err => cb(err, null));
};
// function to retrieve favorites by zipcode
const retrieveFavorites = (zipcode, cb) => {
  db.getFavorite(zipcode)
    .then(data => cb(null, data))
    .catch(err => cb(err, null));
};
// function to update zipcode

// function to save event

//


module.exports.getRecipes = getRecipes;
module.exports.saveZipcode = saveZipcode;
module.exports.retrieveFavorites = retrieveFavorites;
