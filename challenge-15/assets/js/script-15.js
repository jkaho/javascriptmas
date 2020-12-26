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

    if (transform > 0) {
        previousBtn.classList.remove("disabled");
    }

    if (transform === 880) {
        nextBtn.classList.add("disabled");
    }
}

nextBtn.addEventListener("click", nextImg);

function previousImg() {
    transform -= 220;
    gallery.setAttribute("style", "transform: translateX(-" + transform + "px)");

    if (transform === 0) {
        previousBtn.classList.add("disabled");
    }

    if (transform < 880) {
        nextBtn.classList.remove("disabled");
    }
}

previousBtn.addEventListener("click", previousImg);
