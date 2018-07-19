const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/db');

const app = express();
const router = express.Router();


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
  // res.send('hello world');
  // console.log('inside login/write');

//   const Users = new db.Users({
//  email: 'test3@email.com', name: 'MyTest3', tokenSeed: 'anb9uhidjjkgjkjeihijgi', created: '2017-04-12 00:00:00.000' 
// } );
//   Users.save().then((user) => {
//     res.send(`${user} saved to mongoDB`);
//   }).catch((err) => {
//     res.sendStatus(400).send('unable to save to DB');
//   });
  db.checkUser('5b501b167a41dc2ff95047ed', (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
  // db.findAllUsers((err, users) => {
  //   if (err) {
  //     console.log('returned from findAllUsers', err);
  //     res.sendStatus(404);
  //   } else {
  //     console.log(users);
  //     res.send(users);
  //   }
  // });
});

const port = 3000;

app.listen(port, () => {
  console.log(`BudgetLife listening on port: ${port}`);
});
