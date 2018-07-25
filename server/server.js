const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/db');
const utils = require('./helpers.js');
const authRoutes = require('../routes/auth-routes');
const passportSetup = require('../config/passport-setup');

const app = express();

app.engine('html', require('ejs').renderFile);

app.set('views', `${__dirname}/../src`);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.render('index');
  console.log('inside index');
});


app.get('/recipe', (req, res) => {
  utils.getRecipeById(req.query.recipeId, function (error, body) {
    if (error) {
      res.send(error);
    }
    let temp = utils._filter(JSON.parse(body));
    res.send(temp);
  });
});

app.get('/recipes', (req, res) => {
  utils.getRecipes(req.query, function (error, body) {
    if (error) {
      res.send(error);
    }
    res.send(body);
  });
});

app.get('/ingredients', (req, res) => {
  utils.getRecipesByIngredients(req.query, function (error, body) {
    if (error) {
      res.send(error);
    }
    res.send(body);
  });
});

app.get('/calories', (req, res) => {
  utils.getRecipesByCalories(req.query, function(error, body) {
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
