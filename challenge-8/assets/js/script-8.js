/*
// -------Challenge------- // 
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.
*/

// -------My Solution------- // 
var dice = document.getElementById("dice");
var dotDivs = document.getElementsByClassName("dot");

function rollingDice() {
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    if (diceNumber === 1) {
        for (var i = 0; i < dotDivs.length; i++) {
            if (dotDivs[i].className.includes("one")) {
                dotDivs[i].classList.remove("hide");
            } else {
                dotDivs[i].classList.add("hide");
            }
        }
    } else if (diceNumber === 2) {
        for (var i = 0; i < dotDivs.length; i++) {
            if (dotDivs[i].className.includes("two")) {
                dotDivs[i].classList.remove("hide");
            } else {
                dotDivs[i].classList.add("hide");
            }
        }
    } else if (diceNumber === 3) {
        for (var i = 0; i < dotDivs.length; i++) {
            if (dotDivs[i].className.includes("three")) {
                dotDivs[i].classList.remove("hide");
            } else {
                dotDivs[i].classList.add("hide");
            }
        }
    } else if (diceNumber === 4) {
        for (var i = 0; i < dotDivs.length; i++) {
            if (dotDivs[i].className.includes("four")) {
                dotDivs[i].classList.remove("hide");
            } else {
                dotDivs[i].classList.add("hide");
            }
        }
    } else if (diceNumber === 5) {
        for (var i = 0; i < dotDivs.length; i++) {
            if (dotDivs[i].className.includes("five")) {
                dotDivs[i].classList.remove("hide");
            } else {
                dotDivs[i].classList.add("hide");
            }
        }
    } else {
        for (var i = 0; i < dotDivs.length; i++) {
            if (dotDivs[i].className.includes("six")) {
                dotDivs[i].classList.remove("hide");
            } else {
                dotDivs[i].classList.add("hide");
            }
        }
    }
}

dice.addEventListener("click", rollingDice);