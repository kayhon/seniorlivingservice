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

router.get("/form2", function(req, res) {
    res.render("partials/form2.handlebars");
});

router.get("/navbar", function(req, res) {
    res.render("partials/navbar.handlebars");
});

module.exports = router;
  
