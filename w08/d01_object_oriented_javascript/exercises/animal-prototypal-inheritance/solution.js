var Animal = function( name ){
  var _name = name  //name is not a property, this Animal has two properties, getName and setName
  this.getName = function(){ //points to the new object, this is a method
    return _name
  }
  this.setName = function( name ){ //this is also a method
    return _name = name
  }
}

var Cow = function(name){
  this.setName( name ) //This is a pointer, that when invoking new cow it gets run--this always points to the current object it's being executed on
}

Cow.prototype = new Animal() //an object with two properties (getName and setName) is being assigned to Cow.prototype
Cow.prototype.moo = function(){
  return "moo"
}

var bessie = new Cow("Bessie") //this tells Cow function to make new object, it passes in "Bessie", JS looks for object literal setName, then looks if prototype has setName, and it does, because it's new Animal, so JS runs the new Animal
console.log( bessie.moo(), "my name is " + bessie.getName() )


// Jeff's:
// var Cow = function( name ){
//   this.color = "brown";
//   this.name = name;
// }
//
// Cow.prototype = new Animal();
//
// Cow.prototype.moo = function(){};
