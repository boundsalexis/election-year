var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
app.use(express.json());

var handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


///routes variable and sequelize???