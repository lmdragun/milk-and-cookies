var List = function(){
  for (var i = 0; i < arguments.length; i++) {
    this.push(arguments[i]); //List doesn't have a push, but it does on the prototype, because that's an array
  }
}
List.prototype = new Array()
List.prototype.each = function( callback ){
  for( var i = 0; i < this.length; i++ ){
    callback( this[i] ) //'this' points to the List held in items
  }
}
var items = new List("first", "second", "third")
items.each( function( item ){
  if( item == "first" )
    console.log( item, "is the worst")
  if( item == "second" )
    console.log( item, "is the best")
  if( item == "third" )
    console.log( item, "is the one with the hairy chest")
})
