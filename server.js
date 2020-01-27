var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
app.use(express.json());

var handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



var db = require("./models");
///routes variable and sequelize???
console.log("REQUIRING TO POPULATE");
// comment out to prevent table pop each time when running
require("./db/populateDB")();



////
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function(){
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
      });
});