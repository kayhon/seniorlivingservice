var orm = require("../config/orm.js");

var senior = {
    new: function(cols, vals, cb) {
        orm.create("leads", cols, vals, function(res) {
          cb(res);
        });
    },   
};

module.exports = senior;