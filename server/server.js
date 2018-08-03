const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const cookieSession = require('cookie-session');
const db = require('../database/db');
const keys = require('../config');
const passportSetup = require('../config/passport-setup');
const FB_passportSetup = require('../config/fb-passport-setup');
const authRoutes = require('../routes/auth-routes');
const profileRoutes = require('../routes/profile');

const utils = require('./helpers.js');

const app = express();

app.engine('html', require('ejs').renderFile);

app.set('views', `${__dirname}/../src`);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '/../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// use session key to create session cookie
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey],
}));

// initialize passport for app
app.use(passport.initialize());
app.use(passport.session());

// setup prefix for routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

app.get('/', (req, res) => {
  res.render('index');
  console.log('inside index');
});

/**
 * router to handle queries based on recipe id.
 * Function is invoked when users click on a meal in the initial results list
 * original dataset returned from the API is filtered by the helper
 * function _filter to keep only the data that we find relevant
 * to our app.  the reduced result set is returned to the client.
 */
app.get('/recipe', (req, res) => {
  utils.getRecipeById(req.query.recipeId, (error, body) => {
    if (error) {
      res.send(error);
    }
    const temp = utils.myFilter(JSON.parse(body));
    res.send(temp);
  });
});

/**
 * test to see if the user is logged in.  if yes
 * use their allergy info storedin the session variable {intolerances}
 * to modify the query object before sending request to the API.
 * If user recipe search requires calorie information send request
 * to 'complex' query route (counts as 3 requests to the API)
 * otherwise send request to standard recipes request route
 */
app.get('/recipes', (req, res) => {
  if (req.session) { /* 'user is logged in' */
    console.log('we are in a session', req.session.passport);
    // req.query.intolerances = req.session.passport.intolerances;
  }
  if (req.query.maxCalories !== '') { // run complex query
    utils.getRecipesComplex(req.query, function(error, body) {
      if (error) {
        res.send(error);
      }
      else {
        res.send(body);
      }
    });
  }
  else

  utils.getRecipes(req.query, (error, body) => {
    if (error) {
      res.send(error);
    }
    // var temp = JSON.parse(body);
    var temp = [1,2,3]
    // temp = temp.results;
    temp.forEach ((meal) => {
      meal.image = 'https://spoonacular.com/recipeImages/' + meal.image;
    })
    res.send(temp);
  });
});

/** process user recipe search based on ingredients submitted by
 * the user in a comma delimited list */
app.get('/ingredients', (req, res) => {
  utils.getRecipesByIngredients(req.query, (error, body) => {
    if (error) {
      res.send(error);
    }
    res.send(body);
  });
});

/** process user meal plan serch based on calorie count.
 * 3 meals per day are returned.  User can request meal plan for 1 day or 1 week */
app.get('/calories', (req, res) => {
  utils.getRecipesByCalories(req.query, (error, body) => {
    if (error) {
      res.send(error);
    }
    res.send(body);
  });
});


//= ===================================================
// SAMPLE DATA. DATA STRUCTURE
//

// let recipeId = 507593;

// let search = {
//       diet: 'vegetarian',
//       instructionsRequired: true,
//       excludeIngredients: 'coconut',
//       intolerances: ['egg', 'gluten'],
//       number: 12,
//       offset: 0,
//       query: 'burger',
//       type: 'main course'
//   };

// let calSearch = {
//       targetCalories: 2000,
//       timeFrame: 'week'
//   };

// let ingredients = {
//   fillIngredients: false,
//   ingredients: 'apples,flour,sugar'
// };
const port = 3000;

app.listen(port, () => {
  console.log(`BudgetLife listening on port: ${port}`);
});
