var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "@Kayliekeza2018",
    database: "senior_db"
});


connection.connect(function(err) {
    if (err) {
        console.error("error connection: " + err.stack)
        return;
    }
    console.log("connected as id " + connection.threadId)
});

module.exports = connection;