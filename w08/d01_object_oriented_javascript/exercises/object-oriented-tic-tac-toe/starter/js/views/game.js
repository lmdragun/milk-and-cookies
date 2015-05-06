//Board
//click handler
//showing an X or an O after click

var TicTacToeView = function TicTacToeView (domNode, model){
	this.el = document.querySelector(".game"); //typical stored in el or elem, place in dom where the view is attached
	this.model = model;
	this.render(); // render function does not exist yet
};

TicTacToeView.prototype = {
	render: function() { //responsible for filling out game page, and updating later
		this.el.innerHTML = ""; //since we're working with the prototype, 'this' points to the new TTTView
		for ( var i = 0; i < this.model.squares.length; i++){ //our model will be an object with a property called squares, which will probably hold an array
			var square = document.createelement("div");
			square.classNAme = "square";
			square.setAttribute("data-id", i); //freeform/data attribute is set to "i", ie: index in this for loop
			square.innerHTML = this.model.square[i]; // whatever is stored inside the square inside the model
			square.addEventListern("click", this.onClick.bind(this)); //bond back to TTTView, so this is not pointing to the domNode, but on the TTTView (it will look on the button for the onClick button, but .bind takes the context and switches it back to TTTView)
			this.el.appendChild(square); //creates child with div square and data id 0
		}
	}
	onClick: function onClick (event){
		var id = event.target.getAttribute("data-id"); //gets data-id of thing that was clicked
		if(!this.model.square[id]){ //checks to see if something is in the square
			this.model.turn = this.model.turn == "x" ? "o" : "x";
			this.model.squares[id] = this.model.turn;
			this.render(); //updates entire display
			var winner = this.model.winner(); //model concern
			if (winner){
				alert(winner + "s win!");
				this.model.reset();
				this.render();
			}
		}
	}
}

var view = new TicTacToeView(".game", model);

//TicTacToeView prototype
//display (render) a game board
//detect click events
