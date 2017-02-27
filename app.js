var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
});

app.post("/addfriend", function(req, res){
	res.send("You have reached post route");
});

app.get("/friends", function(req, res){
	var friends = ["Kolya", "Olya", "Vanya", "Manya", "Ramzan"];
	res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("server started!!!!");
});