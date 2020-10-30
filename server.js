// Starting point for our Node/Express server
var path = require("path");
// Dependencies
var express = require("express");

// Setting up Express App 
var app = express();
var PORT = process.env.PORT || 8080;

// Models for syncing
var db = require("./models");
app.use(express.static(path.join(__dirname, "/public/assets")));
// Code that sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// var mysql = require('mysql');
// // For jawsDB
// var connection;
// if (process.env.JAWSDB_URL) {
//     // DB is JawsDB on Heroku
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     // DB is local on localhost
//     connection = mysql.createConnection({
//         port: 8080,
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'projects_db'
//     });
// }

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });



// Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing sequelize models and starting our Express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});