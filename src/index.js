const express = require("express");
const app = express();

var mongoose = require("mongoose");
var mongoDB =
  "mongodb+srv://toimelae:Koodari666@cluster0.5merv.mongodb.net/TicTacToe?retryWrites=true&w=majority";

mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// view engine setup
app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080);
