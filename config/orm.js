// Import MySQL connection.
var connection = require("../config/connection.js");

// id
// name:
// email:
// zip:
// serviceType:


var orm = {
  create: function(name, serv, phone, email, zip) {

    var queryString = "INSERT INTO LEADS (name, serv, phone, email, zip) VALUES (" + name + ", " + email + ", " + zip + ", " + serviceType + ")";

  

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);

    });
  },

};