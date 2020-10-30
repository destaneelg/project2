// A set of routes for sending users to the various html pages
var path = require("path");

// Routes
var express = require("express");

module.exports = function(app) {
  app.use(express.static(path.join(__dirname, "./public/assets")));
  // These routes handle the HTML page that the user gets sent to.
  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/list.html"));
  });

  app.get("/to-do", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/to-do.html"));
  });

  // list route loads list.html
  app.get("/list", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/list.html"));
  });

};
