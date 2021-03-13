var notes = require("../db/db.json");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) { 
    res.json(notes);
  });

  app.post("/api/notes", function(req, res) {
    var newNote = req.body;

    newNote.id = Date.now().toString();

    notes.push(newNote);

    res.json(newNote);
  });

  app.delete("/api/notes/:id", function(req, res) {

    for (let i = 0; i < notes.length; i++) {
      
      if (notes[i].id === req.params.id) {
        notes[i] = "";
      }
    }
  });
};