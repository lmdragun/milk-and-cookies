var cat = document.getElementById("cat");
var catLeftPosition = 0;
var catBottomPosition = 0;
var movingCat = function(){
	returnCat();
	cat.style.left = catLeftPosition + "%";
	cat.style.bottom = catBottomPosition + "%";
	catLeftPosition++;
	catBottomPosition++;
}

var returnCat = function(){
	if(catLeftPosition >= 100 || catBottomPosition >= 100){
		catLeftPosition = 0;
		catBottomPosition = 0;
	}
}

function walkingCat() {
		catWalk = setInterval(movingCat, 60);
}

walkingCat();
