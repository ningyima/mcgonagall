const path = require('path');
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'recipe_test'
  }
});

var db = require('bookshelf')(knex);

//Table Schemas 
db.knex.schema.hasTable('').then((exists) => {
  if(!exists) {
    db.knex.schema.createTable(tableName, function(table) {
      console.log('I work');
          //column
    })
    .then((table) => console.log('Created Table: ', table));
  }
});

db.knex.schema.hasTable('Users').then((exists) => {
  if(!exists) {
    db.knex.schema.createTable('Users', function(user) {
      user.increments('id').primary();
      user.string('googleId');
      user.string('googleToken');
      user.string('facebookId');
      user.string('facebookToken');
      user.string('username');
      user.string('intolerances');
      user.string('zipcode');
      user.timestamps();
    })
    .then((table) => console.log('Created Table: ', table));
  }
});

db.knex.schema.hasTable('Businesses').then((exists) => {
  if(!exists) {
    db.knex.schema.createTable('Businesses', function(business) {
      business.increments('id').primary();
      business.string('name');
      business.string('imgUrl', 100);
      business.string('category', 50);
      business.float('rating');
      business.integer('price');
      business.string('address');
      business.string('latitude');
      business.string('longitude');
      business.string('phone');
      business.integer('distance');
      business.timestamps();
    })
    .then((table) => console.log('Created Table: ', table));
  }
});

  db.knex.schema.hasTable('Events').then((exists) => {
    if(!exists) {
      db.knex.schema.createTable('Events', function(event) {
        event.increments('id').primary();
        event.string('name');
        event.dateTime('eventDate');
        event.integer('user_id');
        event.integer('business_id');
        event.timestamps();
      })
      .then((table) => console.log('Created Table: ', table));
    }
  });
        

db.knex.schema.hasTable('LocalFavorites').then((exists) => {
  if(!exists) {
    db.knex.schema.createTable('LocalFavorites', function(favorite) {
      favorite.increments('id').primary();
      favorite.string('zipcode');
      favorite.integer('Italian');
      favorite.integer('Chinese');
      favorite.integer('Mexican');
      favorite.integer('Indian');
      favorite.integer('Thai');
      favorite.integer('American');
      favorite.integer('Japanese');
      favorite.integer('Mediterranean');
      favorite.integer('French');
      favorite.integer('Korean');      
      favorite.integer('distance');
      favorite.timestamps();
    })
    .then((table) => console.log('Created Table: ', table));
  }
});

  db.knex.schema.hasTable('LocalFavorites').then((exists) => {
    if(!exists) {
      db.knex.schema.createTable('LocalFavorites', function(favorite) {
        favorite.increments('id').primary();
        favorite.integer('spoon_id');
        favorite.integer('likes');
        favorite.timestamps();
      })
      .then((table) => console.log('Created Table: ', table));
    }
  });

// ALTER TABLE `Events` ADD FOREIGN KEY (user_id) REFERENCES `User` (`id`);
// ALTER TABLE `Events` ADD FOREIGN KEY (business_id) REFERENCES `Businesses` (`id`);
//Schemas above
module.exports = db; 