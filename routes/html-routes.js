var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req,res){
        res.render("index");
    })

    app.get("/profile", function(req,res){
        res.render("user");
    })

    app.get("/search/:congress", function(req,res){
        let search =req.params.congress;
        console.log(search);
        if (search ==="senate"){
            res.render("searchSenate");
        }
        else if (search ==="house"){
            res.render("searchHouse");
        }
        else if (search ==="congress"){
            res.render("searchCongress");
        }
    })

    // do we wanna do /search/:id with parameters
 //app.get app.post app.delete
  };