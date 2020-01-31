// var db = require("../models");

var path = require("path");

// var loadedTables = false;

module.exports = function (app) {
    app.get("/", function (req, res) {

        // if (loadedTables === false) {
        //     loadedTables = true;
        //     require("../db/populateDB")();
        //     res.render("index");
        // } else if (loadedTables === true) {
            res.render("index");
        // }

    })
    app.get("/profile", function (req, res) {
        res.render("user");
    })
    app.get("/search/congress", function (req, res) {
        res.render("congress");
    })
};