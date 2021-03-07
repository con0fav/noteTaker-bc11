var path = require("path");
var express = require("express");
var app = express();

module.exports = function(app) {

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  });

  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
  });

  // app.get("/assets/js/index.js", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../public/assets/js/index.js"))
  // });

};

