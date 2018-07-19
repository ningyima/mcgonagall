const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/db');

const app = express();

app.engine('html', require('ejs').renderFile);

app.set('views', `${__dirname}/../src`);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/', (req, res) => {
  res.render('index');
  console.log('inside index');
});

app.get('/login/write', (req, res) => {
  db.checkUser(req.query.email, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`BudgetLife listening on port: ${port}`);
});
