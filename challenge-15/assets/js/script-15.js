// -------Challenge------- // 
// Use JS to make the image carousel function
// Left & right arrows should work 

// -------My Solution------- // 
var nextBtn = document.getElementById("next");
var previousBtn = document.getElementById("previous");
var gallery = document.getElementById("gallery");

function nextImg() {
    gallery.setAttribute("style", "transform: translateX(-220px)");
}


