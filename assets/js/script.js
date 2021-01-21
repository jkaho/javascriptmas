var headerBtns = document.querySelectorAll(".challenge-icon");
// var colours = ["rgb(177, 73, 101)", "rgb(233, 147, 18)", "rgb(66, 145, 111)", "rgb(73, 97, 176)", "rgb(124, 91, 162)", "rgb(136, 69, 121)"];
var colours = ["rgb(177, 73, 101)", "rgb(66, 145, 111)"]
var colourIndex = 0;

for (var i = 0; i < headerBtns.length; i++) {
    headerBtns[i].setAttribute("style", "background: " + colours[colourIndex]);
    colourIndex++;

    if (colourIndex === 2) {
        colourIndex = 0;
    }
}

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
