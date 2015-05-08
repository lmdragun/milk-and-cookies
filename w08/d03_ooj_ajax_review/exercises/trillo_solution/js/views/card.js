var CardView = function(card){
  this.card = card
  //the following lines make the new card by choosing/creating the elements within the HTML that will be affected by the javascript, then append the new information (ie: description)
  this.container = document.createElement("div")
  this.container.className = "card"
  this.description = document.createElement("p")
  this.description.innerHTML = card.description
  this.container.appendChild(this.description)
  //the following controls which column the cards will be in, based on input of a checked/unchecked box, by creating an input checkbox, and adding it to the card, then adding an event listener
  var input = document.createElement("input")
  input.type = "checkbox"
  input.checked = card.completed
  input.className = "finish"
  input.addEventListener("click", function(){
    var completed = input.checked ? true : false
    card.update({completed: completed});
  })
  this.description.addEventListener("click", this.editCard.bind(this))
  this.container.appendChild(input)
  return this.container
}

CardView.prototype = {
  //this edits already created cards by removing the text inside and replacing it with the new input
  editCard: function(event){
    var input = document.createElement("input")
    input.value = this.description.innerHTML
    this.container.removeChild(this.description)
    this.container.appendChild(input)
    input.addEventListener("keyup", function(event){
      if (event.keyCode == 13){
        var value = input.value
        this.card.update({description:value})
        trilloView.render()
      }
    }.bind(this) )
  }
}
