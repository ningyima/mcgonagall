var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('views', __dirname + '/../src');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res){
  res.render('index');
})


var port = 3000;

app.listen(port, function(){
  console.log('BudgetLife listening on port: ', port);
})