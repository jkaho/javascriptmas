// -------Challenge------- // 
// Use JS to make the image carousel function
// Left & right arrows should work 
// When at first img, previous btn should be dimmed out
// When at lsat img, next btn should be dimmed out


// -------My Solution------- // 
var nextBtn = document.getElementById("next");
var previousBtn = document.getElementById("previous");
var gallery = document.getElementById("gallery");

var transform = 220;

function nextImg() {
    console.log(transform);
    gallery.setAttribute("style", "transform: translateX(-" + transform + "px)");
    transform += 220;
}

nextBtn.addEventListener("click", nextImg);
