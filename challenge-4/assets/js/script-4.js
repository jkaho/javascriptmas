// -------Challenge------- // 
// Given a year, return the century it is in
// The first century spans from the year 1 up to and including the year 11
// The second spans from year 101 up to and including the year 200, etc. 

// -------My Solution------- // 
// function centuryFromYear(num) {
//     if (num % 100 !== 0) {
//         console.log(Math.floor(num / 100 + 1));
//     } else {
//         console.log(Math.floor(num / 100));
//     }
// }

// -------UI------- // 
var submitBtn = document.getElementById("submit");
var numberInputEl = document.getElementById("number-input");
var centuryEl = document.getElementById("century");

function centuryFromYear() {
    var num = numberInputEl.value;
    if (parseInt(num) < 0) {
        alert("Sorry, this only works for AD centuries!")
        return;
    } 

    if (num === "0") {
        alert("0 is not a year.")
        return;
    }

    if (num === "") {
        alert("You didn't input a year.")
        return;
    }

    if (parseInt(num) % 100 !== 0) {
        var century = Math.floor(num / 100 + 1);
    } else {
        var century = Math.floor(num / 100);
    }

    var stringCentury = century.toString();
    if (stringCentury[stringCentury.length - 1] === "1") {
        centuryEl.textContent = century + "st";
    } else if (stringCentury[stringCentury.length - 1] === "2") {
        centuryEl.textContent = century + "nd";
    } else if (stringCentury[stringCentury.length - 1] === "3") {
        centuryEl.textContent = century + "rd";
    } else {
        centuryEl.textContent = century + "th";
    }
}

submitBtn.addEventListener("click", centuryFromYear);