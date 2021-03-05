// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var notesData = require("../db/db.json");
var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(notesData);
  });

  app.get("/api/notes:id", function(req, res) {
    var id = req.params.id;
    
  })

  app.post("/api/notes", function(req, res) {

  });

  // ---------------------------------------------------------------------------
  // delete route goes here
  
};
