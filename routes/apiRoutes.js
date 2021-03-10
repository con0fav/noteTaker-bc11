var notes = require("../db/db.json");
var fs = require("fs");


module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    
    res.json(notes);
    //fs module to read file
    
    //parse file contents with JSON.parse()

    //send parsed data back to client with res.json()
  });

  app.post("/api/notes", function(req, res) {
    var newNote = req.body;

    console.log(req.body);
    
    newNote.id = Date.now();

    notes.push(newNote);
    console.log(newNote)
    //use Date.Now to create timestamp for id
    res.json(newNote);
    //access posted data in req.body
    //fs module to read file
    //parse file contents with JSON.parse()
    //push req.body to array list
    //JSON.stringify arry back into JSON string
    //save contents back into db.json with fs

  });

  app.delete("/api/notes/:id", function(req, res) {
    
    console.log(req.params.id);
    
    for (let i = 0; i < notes.length; i++) {
      
      //if notes at i dot id === req.params.id console.log notes[i]
      if (notes[i].id === req.params.id) {
        console.log(notes[i]);
        notes[i] = {};
      }
    }

    //find id
    //console.log note
    //

    //return any type of success message
  });
  
};

//array modification