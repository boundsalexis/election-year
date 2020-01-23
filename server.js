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

db.sequelize.sync().then(function(){
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
      });
});