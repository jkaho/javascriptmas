// -------Challenge------- // 
// Check if the given string is a correct time representation of the 24-hour clock

// -------My Solution------- // 
// function validTime(str) {
//     var newStr = str.split("");
//     console.log(newStr);
//     if (newStr.length !== 5 || newStr[2] !== ":" || parseInt(newStr[0]) === NaN) {
//         return false;
//     } else if (parseInt(newStr[0]) === 3 || parseInt(newStr[0]) === 4 || parseInt(newStr[0]) === 5 || parseInt(newStr[0]) === 6 || parseInt(newStr[0]) === 7 || parseInt(newStr[0]) === 8 || parseInt(newStr[0]) === 9) {
//         return false;
//     } else if (parseInt(newStr[0]) === 2 && parseInt(newStr[1]) === 4) {
//         return false;
//     } else if (parseInt(newStr[0]) === 2 && parseInt(newStr[1]) === 5) {
//         return false;
//     } else if (parseInt(newStr[0]) === 2 && parseInt(newStr[1]) === 6) {
//         return false;
//     } else if (parseInt(newStr[0]) === 2 && parseInt(newStr[1]) === 7) {
//         return false;
//     } else if (parseInt(newStr[0]) === 2 && parseInt(newStr[1]) === 8) {
//         return false;
//     } else if (parseInt(newStr[0]) === 2 && parseInt(newStr[1]) === 9) {
//         return false;
//     } else if (parseInt(newStr[3]) === 6 || parseInt(newStr[3]) === 7 || parseInt(newStr[3]) === 8 || parseInt(newStr[3]) === 9) {
//         return false;
//     } else {
//         return true;
//     }
// }

// -------UI------- // 
var submitBtn = document.getElementById("submit");
var timeInputEl = document.getElementById("time");
var validatorEl = document.getElementById("validator");

function validTime() {
    var str = timeInputEl.value;
    var newStr = str.split("");
    
    if (newStr.length !== 5 || newStr[2] !== ":" || parseInt(newStr[0]) === NaN) {
        // invalid format
        alert("Invalid input. The format of your input should be: 00:00");
    } else if (parseInt(newStr[0]) === 3 || parseInt(newStr[0]) === 4 || parseInt(newStr[0]) === 5 || parseInt(newStr[0]) === 6 || parseInt(newStr[0]) === 7 || parseInt(newStr[0]) === 8 || parseInt(newStr[0]) === 9) {
        // first digit is not 0, 1 or 2
        validatorEl.textContent = "Your input is NOT a correct time representation of the 24-hr clock.";
    } else if (parseInt(newStr[0]) === 2 && parseInt(newStr[1]) === 4) {
        // hour section is 24
        validatorEl.textContent = "Your input is NOT a correct time representation of the 24-hr clock.";
    } else if (parseInt(newStr[0]) === 2 && parseInt(newStr[1]) === 5) {
        // hour section is 25
        validatorEl.textContent = "Your input is NOT a correct time representation of the 24-hr clock.";
    } else if (parseInt(newStr[0]) === 2 && parseInt(newStr[1]) === 6) {
        // hour section is 26
        validatorEl.textContent = "Your input is NOT a correct time representation of the 24-hr clock.";
    } else if (parseInt(newStr[0]) === 2 && parseInt(newStr[1]) === 7) {
        // hour section is 27
        validatorEl.textContent = "Your input is NOT a correct time representation of the 24-hr clock.";
    } else if (parseInt(newStr[0]) === 2 && parseInt(newStr[1]) === 8) {
        // hour section is 28
        validatorEl.textContent = "Your input is NOT a correct time representation of the 24-hr clock.";
    } else if (parseInt(newStr[0]) === 2 && parseInt(newStr[1]) === 9) {
        // hour section is 29
        validatorEl.textContent = "Your input is NOT a correct time representation of the 24-hr clock.";
    } else if (parseInt(newStr[3]) === 6 || parseInt(newStr[3]) === 7 || parseInt(newStr[3]) === 8 || parseInt(newStr[3]) === 9) {
        // third digit is not 0, 1, 2, 3, 4 or 5
        validatorEl.textContent = "Your input is NOT a correct time representation of the 24-hr clock.";
    } else {
        validatorEl.textContent = "Your input is a correct time representation of the 24-hr clock.";
    }
}

submitBtn.addEventListener("click", validTime);
