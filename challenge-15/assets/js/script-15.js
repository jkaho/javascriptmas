// -------Challenge------- // 
// Use JS to make the image carousel function
// Left & right arrows should work 
// When at first img, previous btn should be dimmed out
// When at lsat img, next btn should be dimmed out


// -------My Solution------- // 
var nextBtn = document.getElementById("next");
var previousBtn = document.getElementById("previous");
var gallery = document.getElementById("gallery");

var transform = 0;

function nextImg() {
    transform += 220;
    gallery.setAttribute("style", "transform: translateX(-" + transform + "px)");

}

nextBtn.addEventListener("click", nextImg);

function previousImg() {
    transform -= 220;
    gallery.setAttribute("style", "transform: translateX(-" + transform + "px)");
}

previousBtn.addEventListener("click", previousImg);
