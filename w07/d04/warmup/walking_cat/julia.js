var snuggles = document.getElementById("cat");
var intervalID = window.setInterval(walkingCat, 100);
var startingPos = snuggles.style.bottom;
var body = document.querySelector("body");

function walkingCat() {
    snuggles.style.bottom = startingPos + "px";
    snuggles.style.left = startingPos + "px";
    snuggles.style.webkitTransform = "rotate(" + startingPos + "deg)";
    startingPos++;
}
