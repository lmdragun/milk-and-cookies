var Trillo = function(){
  this.cards = []
  this.fetchCards();
}

Trillo.prototype = {
  //this gets the cards out of the database, loads them in the model, and renders them in the view using those functions
  fetchCards: function(callback) {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: "http://localhost:3000/cards"
    }).done(function(response) {
      trilloModel.loadCards(response);
      trilloView.render();
    }).fail(function(response){
      console.log("js failed to load")
    })
  },
  loadCards: function(response) {
    this.cards = [];
    for(var i = 0; i < response.length; i++){
      var card = new Card(response[i].id, response[i].description, response[i].completed);
      this.cards.push(card);
    }
  }

}
