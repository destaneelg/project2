//setting up code to connect Node to MySQL 
// Exporting connection 
//npm install mysql

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "",
    password: "",
    database: "projects_db"
  });
  
  onnection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;
  module.exports = {
    endpoint: process.env.API_URL,
    masterKey: process.env.API_KEY,
    port: process.env.PORT
  }