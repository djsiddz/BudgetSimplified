//grab the dependencies
const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  expressLayouts = require('express-ejs-layouts');

//configure the application
//tell express where to look for static assets
app.use(express.static(__dirname + '/public'));
//set ejs as our templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

//get the routes
app.use(require('./app/routes'));

//start the server
app.listen(port, function() {
  console.log('App listening on http://localhost:${port}');
});
