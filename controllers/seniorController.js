var express = require("express");

var router = express.Router();

var senior = require('../models/senior.js');

router.get("/", function(req, res) {
    res.render("index.handlebars");   
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


module.exports = router;
  
