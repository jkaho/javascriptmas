// -------Challenge------- // 
// Check if the given string is a correct time representation of the 24-hour clock

function validTime(str) {
    var newStr = str.split("");
    if (newStr.length !== 4 || newStr[2] !== ":" || parseInt(newStr[0]) === NaN) {
        // invalid format
        alert("Invalid input. The format of your input should be: 00:00");
    } else if (newStr[0] === 3 || newStr[0] === 4 || newStr[0] === 5 || newStr[0] === 6 || newStr[0] === 7 || newStr[0] === 8 || newStr[0] === 9) {
        alert("Your input is NOT a correct time representation of the 24-hr clock.")
    } else {
        alert("Your input is a corect time representation of the 24-hour clock!")
    }
}

validTime("hello")