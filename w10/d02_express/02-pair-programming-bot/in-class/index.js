var express = require("express")
var app = express()
var routes = require("./routes")
 app.use(express.static(__dirname + "/views"))
//
// app.set("view engine", "hbs")
// app.use(express.static(__dirname + "/public"))
//
// app.get("/", routes.index)
// app.get("write-test", routes.writeTest)
// app.get("pass", routes.pass)
// app.get("write-code", routes.writeCode)
// app.get("refactor", routes.refactor)
// app.get("do_refactor", routes.doRefactor)
// app.get("new-features", routes.newFeature)

app.set('view engine', 'hbs');
app.use(express.static(__dirname +"/public"));
app.get('/', routes.index);
app.get('/write_test', routes.write_test);
app.get('/pass', routes.pass);
app.get('/write_code', routes.write_code);
