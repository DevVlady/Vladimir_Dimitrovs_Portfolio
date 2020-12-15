//Requiring neccessary variables to start server
const express = require('express');
const { appendFile } = require('fs');
const app = express();

//Creating the PORT
const PORT = process.env.PORT || 8080;

//Used for pulc folder route
app.use(express.static('public'));

//Starting Server
app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port PORT: " + PORT);
  });