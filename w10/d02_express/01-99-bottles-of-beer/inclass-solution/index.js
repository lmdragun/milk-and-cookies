var express = require("express")
var app = express()
var routes = require("./routes")

app.set("view engine", "hbs")
app.use(express.static(__dirname + "/public"))

// app.get("/", function( req, res ){
//   res.render('index', {
//     numBottles: 99,
//     next: 98
//   })
// });

app.get("/:numBottles?", routes.index)

// app.get("/:numBottles?", function( req, res ){
  // var numBottles = req.params.numBottles || 99
  // var next = numBottles - 1
  // res.render('index', {
  //   numBottles: parseInt(numBottles),
  //   next: next
  // })
// })

app.listen(3000, function(){
  console.log("listening on 3000")
})
