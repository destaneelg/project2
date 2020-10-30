// Starting point for our Node/Express server

// Dependencies
var express = require("express");

// Setting up Express App 
var app = express();
var PORT = process.env.PORT || 8080;

// Models for syncing
var db = require("./models");

// Code that sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));
{
  "development": {
    "username": "root",
    "password": "Bthootu16",
    "database": "blogger",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  }
}


// Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing sequelize models and starting our Express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
