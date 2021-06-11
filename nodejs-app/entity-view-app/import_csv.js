    var couchimport = require('couchimport');
    var opts = { delimiter: ",", url: "http://localhost:5984", database: "movies" };

    couchimport.importFile("movies.csv", opts, function(err,data) {
       console.log("done",err,data);
    });
