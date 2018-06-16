const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
var logger = require("morgan");
var axios = require("axios");
var cheerio = require("cheerio");
// Require all models
var db = require("./models");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Set up our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();
//mongodb://fireatwillrva:w00tcore@ds053156.mlab.com:53156/mongo-scraper
// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({
  extended: true
}));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// If deployed, use the deployed database. Otherwise use the local mongoScraper database
//---------------------------------------------------------
var databaseUri = "mongodb://localhost/MongoScraper";
//---------------------------------------------------------

mongoose.connect(process.env.MONGODB_URI || databaseUri, () => console.log(process.env));
// || 'mongodb://fireatwillrva:w00tcore@ds053156.mlab.com:53156/mongo-scraper';

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
