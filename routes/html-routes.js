// A set of routes for sending users to the various html pages

var path = require("path");

// Routes

module.exports = function(app) {

  // These routes handle the HTML page that the user gets sent to.
  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/list.html"));
  });

  app.get("/to-do", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/to-do.html"));
  });

  // list route loads list.html
  app.get("/list", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/list.html"));
  });

};
