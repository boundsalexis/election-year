var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req,res){
        res.render("index");
    })

    app.get("/profile", function(req,res){
        res.render("user");
    })
    app.get("/searchHouse", function(req,res){
        res.render("searchHouse");
    })
    app.get("/searchSenate", function(req,res){
        res.render("searchSenate");
    })
    app.get("/searchCongress", function(req,res){
        res.render("searchCongress");
    })
 //app.get app.post app.delete
  };