var express = require("express");
var db = require("./models");

var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// innerware for cors policy issue
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  // res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});
// end innerware

var db = require("./models");




////Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


db.sequelize.sync().then(function () {

  //comment in if it is your first time installing 
  // comment out to prevent table pop each time when running
  
  //Get all senators. If response is empty we need to populate tables
  // db.Senator.findAll({}).then(function (res) {
  //   if (res.length === 0) {
  //     require("./db/populateDB")();
  //   }
  // });

  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});