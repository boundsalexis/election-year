var db = require("../models");
var Chart = require("chart.js");

// console.log(chart);
//hello
module.exports = function (app) {
    app.get("/",function(req,res){
        res.render("index");
    })
    // ===========================================================================
    // GET REQUESTS
    // ===========================================================================

    app.get("/api/login/:email/:password", function (req, res) {
        db.Login.findOne({
            where: {
                email: req.params.email,
                password: req.params.password
            }
        }).then(function (data) {
            console.log(data);
            res.json(data.dataValues.UserId);
            console.log(data.dataValues.UserId);

        })
    });

    app.get("/api/user/:user", function (req, res) {
        db.User.findOne({
            where: {
                id: req.params.user
            }
        }).then(data => {
            // console.log(data.dataValues)
            res.render("user", data.dataValues);
        })
    });

    // get one representative by name
    app.get("api/representative/:name", function (req, res) {
        db.Representative.findOne({
            where: {
                name: req.params.name
            }
        }).then(function (dbRepresentative) {
            res.json(dbRepresentative);
        })
    });

    app.get("/api/senatorprofile/:fecid", function(req,res){
        db.Senator.findOne({
            where:{
                fecId: req.params.fecid
            }
        }).then(response=>{
            let editResponse = response.dataValues;
            if (editResponse.party ==="R"){
                editResponse.party = "Republican";
            }
            else if (editResponse.party ==="D"){
                editResponse.party = "Democrat";
            }
            else if (editResponse.party ==="ID"){
                editResponse.party ="Independent"
            }
            if (editResponse.gender==="F"){
                editResponse.gender = "Female";
            }
            else{
                editResponse.gender = "Male";
            }
            res.render("senatorprofile", editResponse)});
    })
    
    app.get("/api/representativeprofile/:fecid", function(req,res){
        db.Representative.findOne({
            where:{
                fecId:req.params.fecid
            }
        }).then(response=>{
            let editResponse = response.dataValues;
            if (editResponse.party ==="R"){
                editResponse.party = "Republican";
            }
            else if (editResponse.party ==="D"){
                editResponse.party = "Democrat";
            }
            else if (editResponse.party ==="ID"){
                editResponse.party ="Independent"
            }
            if (editResponse.gender==="F"){
                editResponse.gender = "Female";
            }
            else{
                editResponse.gender = "Male";
            }
            res.render("representativeprofile", editResponse)});
    })
    
 
    // get one senator by name
    app.get("/api/senatorByName/:name", function (req, res) {
        db.Senator.findOne({
            where: {
                name: req.params.name
            }
        }).then(function (dbSenator) {
            res.json(dbSenator);
        })
    });

    // get all senators from one state
    app.get("/api/senatorByState/:state", function (req, res) {
        db.Senator.findAll({
            where: {
                state: req.params.state
            }
        }).then(function (stateSens) {
            res.json(stateSens);
        })
    });

    // get all representatives from one state
    app.get("/api/representativeByState/:state", function (req, res) {
        db.Representative.findAll({
            where: {
                state: req.params.state
            }
        }).then(function (stateReps) {
            res.json(stateReps);
        })
    });

    app.get("api/comment/:id", function (req, res) {
        let senatorID = req.params.id;
        db.Comment.findAll({
            where: { SenatorId: senatorID }
        }).then(function (response) {
            response = response.map(c => c.dataValues);
            res.json(response);
        });
    });
    // get all comments about a representative
    // Sends an array of comment objects
    app.get("api/comment/:id", function (req, res) {
        let repID = req.params.id;
        db.Comment.findAll({
            where: { RepresentativeId: repID }
        }).then(function (response) {
            response = response.map(c => c.dataValues);
            res.json(response);
        });
    });

    // ===========================================================================
    // POST REQUESTS
    // ===========================================================================

    app.post("/api/addcredential", function (req, res) {
        console.log(req.body);
        var user = {
            name: req.body.name,
            location: req.body.location
        };
        var login = {
            email: req.body.email,
            password: req.body.password

        };
        db.User.create(user).then(res => {
            login.UserId = res.dataValues.id;
            db.Login.create(login);
        })
    });

    app.post("/api/representative/comments", function (req, res) {
        db.Comment.create(req.body).then(function (dbComment) {
            res.json(dbComment)
        })
    });
    // post a comment on a representatives page
    app.post("/api/senator/comments", function (req, res) {
        db.Comment.create(req.body).then(function (dbComment) {
            res.json(dbComment)
        })
    });




    // ===========================================================================
    // QUERY REQUEST
    // ===========================================================================

    // SEARCH SENATORS
    app.get("/api/senator/:party?/:state?/:gender?/:name?", function (req, res) {
        let whereClause = {};
        if (req.params.party !== "empty") {
            whereClause['party'] = req.params.party;
        }
        if (req.params.state !== "empty") {
            whereClause['state'] = req.params.state;
        }
        if (req.params.gender !== "empty") {
            whereClause['gender'] = req.params.gender;
        }
        if (req.params.name !== "empty") {
            whereClause['name'] = req.params.name;
        }
        console.log(whereClause);
        db.Senator.findAll({
            where: whereClause
        }).then(function (dbSenators) {
            console.log(res.json(dbSenators));
        })
    });

    // SEARCH REPRESENTATIVES
    app.get("/api/representative/:party?/:state?/:gender?/:name?", function (req, res) {
        let whereClause = {};
        if (req.params.party !== "empty") {
            whereClause['party'] = req.params.party;
        }
        if (req.params.state !== "empty") {
            whereClause['state'] = req.params.state;
        }
        if (req.params.gender !== "empty") {
            whereClause['gender'] = req.params.gender;
        }
        if (req.params.name !== "empty") {
            whereClause['name'] = req.params.name;
        }
        console.log(whereClause);
        db.Representative.findAll({
            where: whereClause
        }).then(function (dbRepresentative) {
            console.log(res.json(dbRepresentative))
        })
    });

}
