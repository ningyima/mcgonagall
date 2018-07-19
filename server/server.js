const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.engine('html', require('ejs').renderFile);

app.set('views', __dirname + '/../src');
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/', (req, res) => {
  res.render('index');
});

const port = 3000;

app.listen(port, () => {
  console.log(`BudgetLife listening on port: ${port}`);
});
