var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index");
    })

    app.get("/profile", function (req, res) {
        res.render("user");
    })

    app.get("/search/congress", function (req, res) {
        res.render("congress");

    })

    //app.get app.post app.delete
};