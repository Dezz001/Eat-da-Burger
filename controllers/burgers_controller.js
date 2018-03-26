var express = require("express");

var router = express.Router();

// Importing burger.js
var burger = require("../models/burger.js");

// ============================================================================

// Create routes and set up logic
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// ============================================================================

router.post("/", function(req, res) {
   burger.insertOne([
    "name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});

// ============================================================================

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  // Testing
  console.log("condition", condition);

  burger.updateOne({
    condition: req.body.condition
  }, condition, function() {
    res.redirect("/");
  });
});

// ============================================================================

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});

// ============================================================================

// Export routes for server.js use.
module.exports = router;
