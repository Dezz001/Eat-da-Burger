// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

var routes = require("./controllers/burgers_controller.js");

var port = 8080;
var app = express();

// // Allows Heroku to set the application port
// var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

// Handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

// app.listen(port);

// Start our server so that it can begin listening to client requests.
app.listen(port, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on port " + port);
});




