var notes = require("../db/db.json");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(notes);

    //fs module to read file
    //parse file contents with JSON.parse() 
    //send parsed data back to client with res.json()
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

    //access posted data in req.body
    //fs module to read file
    //parse file contents with JSON.parse()
    //push req.body to array list
    //JSON.stringify arry back into JSON string
    //save contents back into db.json with fs

  });

  // ---------------------------------------------------------------------------
  // delete route goes here

  app.delete("/api/notes/:id", function(req, res) {
    //access :id from req.params.id
    //fs module to read file
    //parse file contents with JSON.parse() 
    
    //find the matching index using .findIndex()
    //remove target element using splice() method
    //or
    //use the Array.filter() method to filter out matching element
    //ex: myArray =myArray.filter( element => element.id !== req.params.id);
    
    //return any type of success message
  });
  
};
