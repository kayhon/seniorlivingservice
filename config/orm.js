// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {

  create: function(cols, vals, cb) {
    var queryString = `INSERT INTO leads (${cols[0]}, ${cols[1]}, ${cols[2]}, ${cols[3]}, ${cols[4]}) VALUES (?, ?, ?, ?, ?)`;
    
    // console.log(cols);
    // console.log(vals);

    console.log(queryString);


    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);

    });
  },

};


// Export the orm object for the model (senior.js).
module.exports = orm;