// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {

  // =================================================================

  // Show database values
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  
  // =================================================================

  // Add values to database
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  // =================================================================

  // Update values in database
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// =================================================================

// Export database values to controller (burgers_controller.js)
module.exports = burger;