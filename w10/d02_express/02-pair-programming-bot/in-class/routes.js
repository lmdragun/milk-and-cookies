var Button = function(val,next,type){
  this.val = val;
  this.next = next;
  this.type = type || 'info';
}

var index = function(req,res){
  var prompt = "Do you have a test for that?"
  var buttons = [];
  buttons.push(new Button('Yes','/pass','pass'));
  buttons.push(new Button('No','/write_test','fail'));
  var data = {prompt: prompt, buttons: buttons};
  res.render('index', data);
}
var writeTest = function(req,res){
  var prompt = "Write a test"
  var buttons = [];
  buttons.push(new Button('Done','/pass','info'));
  var data = {prompt: prompt, buttons: buttons};
  res.render('index', data);
}
var pass = function(req,res){
  var prompt = "Does the test pass?"
  var buttons = [];
  buttons.push(new Button('Yes','/refactor','pass'));
  buttons.push(new Button('No','/write_code','fail'));
  var data = {prompt: prompt, buttons: buttons};
  res.render('index', data);
}
var write_code = function(req,res){
  var prompt = "Write just enough code for the test to pass."
  var buttons = [];
  buttons.push(new Button('Done','/pass','info'));
  var data = {prompt: prompt, buttons: buttons};
  res.render('index', data);
}
module.exports = {
  index: index,
  write_test: writeTest,
  pass: pass,
  write_code: write_code
}

//
// module.exports = {
// 	index: function( req, res){
// 		res.render('index', {
// 			var question = "<h1>Do you have a test for that?</h1>"
// 			//if yes redirector refactor
// 			//if no redirect writeTest
// 		})
// 	}
// 	writeTest: function( req, res){
// 		var command = "<h1>Write a test.</h1>"
// 		//redirect to pass
// 	}
// 	pass: function( req, res){
// 		var question = "<h1>Does the test pass?</h1>"
// 		//if yes redirect to refactor
// 		//if no redirect writeCode
// 	}
// 	writeCode: function( req, res){
// 		var command = "<h1>Write just enough code for the test to pass.</h1>"
// 		//redirect pass
// 	}
// 	refactor: function( req, res){
// 		var question = "<h1>Need to refactor?</h1>"
// 		//if yes redirect doRefactor
// 		//if no redirect to newFeature
// 	}
// 	doRefactor: function( req, res){
// 		var command = "<h1>Refactor the code.</h1>"
// 		//redirect to pass
// 	}
// 	newFeature: function( req, res){
// 		var command = "<h1>Select a new feature to implement.</h1>"
// 		//redirect "/"
// 	}
// }
