var notes = require("../db/db.json");
// var fs = require("fs");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) { 
    res.json(notes);
  });

  app.post("/api/notes", function(req, res) {
    var newNote = req.body;

    newNote.id = Date.now();

    notes.push(newNote);

    res.json(newNote);
  });

  app.delete("/api/notes/:id", function(req, res) {
    
    for (let i = 0; i < notes.length; i++) {
      
      if (notes[i].id === req.params.id) {
        notes[i] = "";
        // notes.splice(i, 1);
      }
    }
  });
  
};