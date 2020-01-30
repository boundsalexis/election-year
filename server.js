var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



var db = require("./models");
///routes variable and sequelize???



////
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


db.sequelize.sync().then(function () {
  // comment out to prevent table pop each time when running
  // require("./db/populateDB")();
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});