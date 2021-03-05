var notes = require("../db/db.json");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(notes);
  });

  app.get("/api/notes:id", function(req, res) {
    var id = req.params.id;

    for (let i = 0; i < notes.length; i++) {
      if (id === notes[i].routeName) {
        return res.json(notes[i]);
      }
    }
    return res.json(false);
  });

  app.post("/api/notes", function(req, res) {
    var newNote = req.body;

    console.log(newNote);

    notes.push(newNote);
  });

  // ---------------------------------------------------------------------------
  // delete route goes here
  
};
