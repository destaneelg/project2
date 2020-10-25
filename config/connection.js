//setting up code to connect Node to MySQL 
// Exporting connection 
//npm install mysql

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "",
    password: "",
    database: ""
  });
  
  onnection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;