const express = require("express");
const app = express();

var mongoose = require("mongoose");

var mongoDB =
  "mongodb+srv://rhynnine:Kissa888!@cluster0.unrpb.mongodb.net/TicTacToe?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080);