// Import MySQL connection.
var connection = require("../config/connection.js");

function printQuestionMarks (num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}
  // helper function to convert object key/value pairs to SQL syntax
 function objToSql(ob) {
   var arr = [];
   //loop through the keys and push the key/value as a string int arr
   for (var key in ob) {
     var value = ob[key];
     if (object.hasOwnProperty.call (ob, key)) {
   // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ")>= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      arr.push(key + "=" + value);
     }
   }
   return arr.toString();
 } 


var orm = {

  create: function(cols, vals, cb) {
    var queryString = `INSERT INTO leads (${cols[0]}, ${cols[1]}, ${cols[2]}, ${cols[3]},${cols[4]}) VALUES (${cols[0]},${cols[1]}, ${cols[2]}, ${cols[3]},${cols[4]})`;


    console.log(queryString);


    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);

    });
  },

};
// Export the orm object for the model (senior.js).
module.exports = orm;