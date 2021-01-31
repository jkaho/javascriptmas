var homepageImg = document.getElementById("homepage-img");
var speech1 = document.getElementById("speech1");
var speech2 = document.getElementById("speech2");
var speech3 = document.getElementById("speech3");
var speech4 = document.getElementById("speech4");

var speechBubbles = [speech1, speech2, speech3, speech4];

homepageImg.addEventListener("mouseover", function() {
    var speechIndex = 0;
    speechBubbles[speechIndex].classList.remove("hide");
    homepageImg.addEventListener("mouseout", function() {
        speechBubbles[speechIndex].classList.add("hide");
    })
})