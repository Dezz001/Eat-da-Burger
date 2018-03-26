
// Import MySQL connection object
var connection = require("../config/connection.js");

// MySQL syntax helper
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}



// MySQL syntax helper
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    // var value = ob[key];

    if (Object.hasOwnProperty.call(ob, key)) {
		arr.push(key + "=" + ob[key]);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}



// Create orm object
var orm = {

// ============================================================================

  // Return all table entry function
  selectAll: function(tableInput, cb) {
  	// Build query string that returns all rows from the table
    var queryString = "SELECT * FROM " + tableInput + ";";

    // Query
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      // Callback results
      cb(result);
    });
  },

// ============================================================================

  // Table entry function
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);
	
	// Query
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

	  // Callback results
      cb(result);
    });
  },

// ============================================================================

  // Entry update function
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

	  // Callback results
      cb(result);
    });
  } 
};

// Export orm object to other models (burger.js)
module.exports = orm;
