
// A set of routes for displaying and saving data to the db


// Requiring our models
//may need to change const to var 
const db = require("../models");
module.exports = function(app) {

  // getting all posts with GET route 
  app.get("/api/posts/", function(req, res) {
    db.Projects.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // returning posts of a specific category with Get route
  app.get("/api/posts/category/:category", function(req, res) {
    db.Projects.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // retrieving a single post with Get route  
  app.get("/api/posts/:id", function(req, res) {
    db.Projects.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // saving a new post with POST route  
  app.post("/api/projects", function(req, res) {
    console.log('this is the list', req.body);
    db.Projects.create({
      name: req.body.name,
      description: req.body.description,
      urgency: req.body.urgency,
      status: req.body.status,
      date: req.body.date,
      category: req.body.category
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Projects.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Projects.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};
