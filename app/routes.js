//creating routes
const express = require('express'),
  router = express.Router(),
  mainController = require('./controllers/main.controller'),
  eventsController = require('./controllers/events.controller');

//export the Router
module.exports = router;

//define routes
  //main route
  router.get('/', mainController.showHome);
  //events routes
  router.get('/events', eventsController.showEvents);
  router.get('/events/:slug', eventsController.showSingle);
  //create events
  //edit events
  //delete events
