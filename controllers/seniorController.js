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

router.get("/form3", function(req, res) {
    res.render("partials/form3.handlebars");
});


router.get("/form4", function(req, res) {
    res.render("partials/form4.handlebars");
});

router.get("/form5", function(req, res) {
    res.render("partials/form5.handlebars");
});

router.get("/navbar", function(req, res) {
    res.render("partials/navbar.handlebars");
});

router.get("/footer", function(req, res) {
    res.render("partials/footer.handlebars");
});

module.exports = router;
  
