var db = require("../models");

module.exports = function(app) {

    // ===========================================================================
    // GET REQUESTS
    // ===========================================================================

    // FIND ALLs
    app.get("api/representative", function(req, res) {
        db.Representative.findAll({})
            .then(function(dbRepresentative) {
                res.json(dbRepresentative)
            })
    });

    app.get("api/senator", function(req, res) {
        db.Senator.findAll({})
            .then(function(dbSenator) {
                res.json(dbSenator)
            })
    });

    // FIND ONEs

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
    app.get("api/representative/:memberId", function(req, res) {
        db.Representative.findOne({
            where: {
                memberId: req.params.memberId
            }
        }).then(function(dbRepresentative) {
            res.json(dbRepresentative);
        })
    });

    // get one senator by name
    app.get("api/senator/:memberId", function(req, res) {
        db.Senator.findOne({
            where: {
                memberId: req.params.memberId
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
                // respresentative response obj does not include state specifically, but the first two characters of their district name are their two letter state code. maybe can parse from this?
                state: req.params.state
            }
        }).then(function(stateReps) {
            res.json(stateReps);
        })
    });

    // get all votes from a senator/representative
        // with party
        // present
        // absent etc
        // check back on this once Carlos adds this info to his models

    // get all comments about a senator
    // get all comments about a representative

    // get all GOP/DEM senators
    // get all GOP/DEB representatives



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


    // post a saved representative to my save reps


  };