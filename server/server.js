const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const cookieSession = require('cookie-session');
const db = require('../db/schema');
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
  keys: ['cookie', 'egg', 'milk'],
  name: 'unlock',
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
 * test to see if the user is logged in.  if yes
 * use their allergy info storedin the session variable {intolerances}
 * to modify the query object before sending request to the API.
 * If user recipe search requires calorie information send request
 * to 'complex' query route (counts as 3 requests to the API)
 * otherwise send request to standard recipes request route
 */
app.get('/recipes', (req, res) => {
  console.log(req.query)
  utils.getRecipes(req.query, (error, results) => {
    if (error) {
      res.send(error);
    } 
    console.log('body: ', JSON.parse(results));
    let parsed = JSON.parse(results);
    res.json(parsed.matches);
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`BudgetLife listening on port: ${port}`);
});

//= ===================================================
//*SAMPLE DATA SHAPE
