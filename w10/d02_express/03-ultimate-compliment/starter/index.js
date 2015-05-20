var express = require("express")
var app = express()
var compliments = require("./models/compliment")
var colors = require("./models/color")

app.set("view engine","hbs")
app.use(express.static(__dirname + "/public"))

app.get("/", function( req, res ){
 //display a generic greeting and a randomly chosen compliment. Th    e background color of the app should be randomized as well
 var bgcolor = colors[Math.round(Math.random()*(colors.length-1))]
 var randomCompliment = compliments[Math.round(Math.random()*(compliments.length-1))]
 res.render('index',{
   bgcolor: bgcolor,
   randomCompliment: randomCompliment
 })
})

app.listen(3000, function(){
  console.log("app listening at http://localhost:3000/")
})
