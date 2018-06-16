// Import MySQL connection.
var connection = require("../config/connection.js");

// id
// name:
// email:
// zip:
// serviceType:


var orm = {
  create: function(name, email, zip, type, cb) {

    var queryString = "INSERT INTO LEADS (name, email, zip, serviceType) VALUES (" + name + ", " + email + ", " + zip + ", " + serviceType + ")";

    // queryString += name + " ";
    // queryString += cols.toString();
    // queryString += ") ";
    // queryString += "VALUES (";
    // queryString += printQuestionMarks(vals.length);
    // queryString += ") ";

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);

    });
  },

};