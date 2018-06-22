var express = require("express");

var router = express.Router();
//Import the model (senior.js) to use it's database functions.
var senior = require("../models/senior.js");

var orm = require ("../config/orm.js");

router.get("/", function(req, res) {
    res.render("index");   
});

router.get("/aboutus", function(req, res) {
    res.render("partials/aboutUs");
});

router.get("/services", function(req, res) {
    res.render("partials/services");
});

router.get("/contact", function(req, res) {
    res.render("partials/contact.handlebars");
});

router.get("/form2", function(req, res) {
    res.render("partials/form2.handlebars");
});

router.get("/navbar", function(req, res) {
    res.render("partials/navbar.handlebars");
});
router.post("/api/orm", function (req, res) {
    console.log(req.body);
    orm.create([
        "name", "serv","phone", "email", "zip"
    ], [
        req.body.name, 
        req.body.serv,
        req.body.phone,
        req.body.email,
        req.body.zip
    ], function(result) {
        res.json({ id:result.insertId});
    });
})
module.exports = router;
  
