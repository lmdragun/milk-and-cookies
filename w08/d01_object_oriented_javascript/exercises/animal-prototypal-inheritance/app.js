var Animal = function( name ){
  var _name = name
  this.getName = function(){
    return _name
  }
  this.setName = function( name ){
    return _name = name
  }
}

var Cow = function( name ){
  newCow = new Animal(name)
  this.moo = function(){
    return newCow.getName() + " goes moo."
  }
}
