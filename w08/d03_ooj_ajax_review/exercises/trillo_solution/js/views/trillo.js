var TrilloView = function(trilloModel){
  //these find the different elements to be used within the document
  var newCardButton = document.querySelector("#new-card-button")
  this.newCardText = document.querySelector("#new-card-text")
  this.toDoList = document.querySelector("#todo-column .card-list")
  this.doneList = document.querySelector("#completed-column .card-list")
  //this declares the trilloModel as the model of this TrilloView
  this.model = trilloModel
  //this adds an event listener to the button
  newCardButton.addEventListener("click", this.addCard.bind(this))
  //this renders everything in the TrilloView
  this.render()
}

TrilloView.prototype = {
  //this adds a card by initializing a new Card and saving it to the Rails app
  addCard: function(event){
    event.preventDefault();
    var description = this.newCardText.value;
    var card = new Card(null, description, false);
    card.save();
    this.render()
  },
  render: function(){
    this.toDoList.innerHTML = ""
    this.doneList.innerHTML = ""
    for(var i = 0; i < this.model.cards.length; i++){
      var cardView = new CardView(this.model.cards[i])
      if(this.model.cards[i].completed){
        this.doneList.appendChild(cardView)
      }
      else{
        this.toDoList.appendChild(cardView)
      }
    }
  }
}
