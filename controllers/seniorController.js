var express = require("express");

var router = express.Router();

var senior = require('../models/senior.js');

router.get("/", function(req, res) {
    res.render("template");   
});

router.get("/aboutus", function(req, res) {
    res.render("partials/aboutUs");
});

module.exports = router;
  
