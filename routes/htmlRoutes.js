// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var express = require("express");
var app = express();


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  });

  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
  });

  app.get("/assets/js/index.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/js/index.js"))
  });

};

