const db = require('../helpers');
const Users = require('../collections/users');
const User = require('../models/user');
const Businesses = require('../collections/businesses');
const Business = require('../models/business');
const Events = require('../collections/events');
const Event = require('../models/event');
const Favorites = require('../collections/favorites');
const Favorite = require('../models/favorite');
const Recipes = require('../collections/recipes');
const Recipe = require('../models/recipe');

describe('test database query functions for saving, retrieving, and updating', () => {
  test('save the user information', () => {
    // we need to setup a user object for proper info
    const user = {
      googleId: '104541866447165646572',
      username: 'Tristan Carter',
      profileImageUrl: 'https://lh6.googleusercontent.com/-UK7XZ-m4wHo/AAAAAAAAAAI/AAAAAAAAAbc/_KRRKAXtx3g/photo.jpg?sz=50',
    }
    db.saveUser(user)
      .then(() => {
        new User({ googleId: user.googleId }).fetch()
          .then(found => expect(found).toEqual(user))
          .catch(() => expect(1 + 1).toBe(3));
      });
  });
});
