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
