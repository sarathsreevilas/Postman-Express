var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.listen(8000);

app.use(function(req,res,next){
	next()
});

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json());

app.get("/",function(req,res){
	console.log(req);
	res.send("index page");
});

app.get("/about",function(req,res){
	res.send("about page");
})

app.get("/students",function(req,res){
	console.log(req.body);
	res.send("students");
})

app.post("/login",function(req,res){
	res.send(req.body.hobby);
});