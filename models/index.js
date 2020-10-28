var orm = require("../config/orm.js");

"use strict";
var env = require('env')()
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

env.ok(function(err) {
  if (!err) return
  console.error(err)
  process.exit(1)
})
 
// Yes, it's SYNC, so you can do this too!
 
function handleEnv (err) {
  if (!err) return
  process.exit(1)
}
 
if (env.ok(handleEnv)) {
  var port = env.get('SETUP_PORT')
  server.listen(port)
}

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;