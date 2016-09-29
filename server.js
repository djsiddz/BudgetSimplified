//grab the dependencies
const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;
//configure the application

//set the routes
app.get('/', function (req, res) {
  res.send('Hello, I am the app!');
});

//start the server
app.listen(port, function() {
  console.log('App listening on http://localhost:${port}');
});
