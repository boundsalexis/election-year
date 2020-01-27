var db = require("../models");

module.exports = function(app) {

    // ===========================================================================
    // GET REQUESTS
    // ===========================================================================

    // will consolidate this into a mulptiple option route parameter api express route

    // see all senators
    app.get("/api/senator", function(req, res) {
        db.Senator.findAll({})
            .then(function(dbSenator) {
                res.json(dbSenator)
            })
    });

    // see all representatives
    app.get("api/representative", function(req, res) {
        db.Representative.findAll({})
            .then(function(dbRepresentative) {
                res.json(dbRepresentative)
            })
    });

    // get my user info
    app.get("api/user/:user", function(req, res) {
        db.User.findOne({
            where: { 
                // Might consider adding id auto_incrememnting to username model, help distinguish from users with the same name
                name: req.params.name
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        })
    });

    // get one representative by name
    app.get("api/representative/:name", function(req, res) {
        db.Representative.findOne({
            where: {
                name: req.params.name
            }
        }).then(function(dbRepresentative) {
            res.json(dbRepresentative);
        })
    });

    // get one senator by name
    app.get("api/senator/:name", function(req, res) {
        db.Senator.findOne({
            where: {
                name: req.params.name
            }
        }).then(function(dbSenator) {
            res.json(dbSenator);
        })
    });

    // get all senators from one state
    app.get("api/senator/:state", function(req, res) {
        db.Senator.findAll({
            where: {
                state: req.params.state
            }
        }).then(function(stateSens) {
            res.json(stateSens);
        })
    });

    // get all representatives from one state
    app.get("api/representative/:state", function(req, res) {
        db.Representative.findAll({
            where: {
                state: req.params.state
            }
        }).then(function(stateReps) {
            res.json(stateReps);
        })
    });

    // get all senators by party
    app.get("api/senator/:party", function(req, res) {
        db.Senator.findAll({
            where: {
                party: req.params.party
            }
        })
    })

    // get all house representatives by party
    app.get("api/representative/:party", function(req, res) {
        db.Representative.findAll({
            where: {
                party: req.params.party
            }
        })
    })

    // get all comments about a senator
    // get all comments about a representative
    
    // get all votes from a senator/representative
        // with party
        // present
        // absent etc
        // check back on this once Carlos adds this info to his models

    




    // ===========================================================================
    // POST REQUESTS
    // ===========================================================================

    // post new user account info
    app.post("api/user", function(req, res) {
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser)
        })
    })

    // post a comment on a representatives page
    app.post("api/representative/comments", function(req, res) {
        db.Comment.create(req.body).then(function(dbComment) {
            res.json(dbComment)
        })
    })
    
    // post a comment on a representatives page
    app.post("api/senator/comments", function(req, res) {
        db.Comment.create(req.body).then(function(dbComment) {
            res.json(dbComment)
        })
    })



  };

    // ===========================================================================
    // QUERY REQUEST
    // ===========================================================================

    // app.get("api/:branch?/:party?/:state?/:gender?/:name?", function(req, res) {
    //     var branch = req.params.branch;
    //     console.log(branch);
        // var party = req.params.party;
        // console.log(party);
        // var state = req.params.state;
        // console.log(state);
        // var gender = req.params.gender;
        // console.log(gender);
        // var name = req.params.name;
        // console.log(name);
    // });

