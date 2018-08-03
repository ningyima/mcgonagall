const db = require('../schema');
const Event = require('../models/event');

const Events = new db.Collection();

Events.model = Event;

module.exports = Events;
