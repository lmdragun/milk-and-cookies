var Card = function(id, description, completed){
  this.id = id;
  this.description = description;
  this.completed = completed;
}

Card.prototype = {
  save: function(){
    //this communicates with the Rails app the same way it would with an API, by 'posting' it to the app, it's saved in the database
    $.ajax({
      type: 'POST',
      data: { card: {description: this.description, completed: this.completed}},
      dataType: 'json',
      url: "http://localhost:3000/cards"
    }).done(function(response){
      console.log("model saved")
      trilloModel.fetchCards();
    }).fail(function(){
      console.log("failed to save")
    })
  },
  update: function(data){
    //this updates the cards in the database using the specific card ID as params
    $.ajax({
      type: 'PUT',
      data: {card: data},
      dataType: 'json',
      url: "http://localhost:3000/cards/" + this.id
    }).done(function(response){
      trilloModel.fetchCards();
      console.log("model updated")
    }).fail(function(){
      console.log("failed to updated")
    })
  }
}
