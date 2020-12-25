// -------Challenge------- // 
// Check if the given string is a correct time representation of the 24-hour clock

function validTime(str) {
    var newStr = str.split("");
    console.log(newStr);
    if (newStr.length !== 5 || newStr[2] !== ":" || parseInt(newStr[0]) === NaN) {
        return false;
    } else if (parseInt(newStr[0]) === 3 || parseInt(newStr[0]) === 4 || parseInt(newStr[0]) === 5 || parseInt(newStr[0]) === 6 || parseInt(newStr[0]) === 7 || parseInt(newStr[0]) === 8 || parseInt(newStr[0]) === 9) {
        return false;
    } else if (parseInt(newStr[0]) === 2 && parseInt(newStr[1]) === 4) {
        return false;
    } else if (parseInt(newStr[0]) === 2 && parseInt(newStr[1]) === 5) {
        return false;
    } else if (parseInt(newStr[0]) === 2 && parseInt(newStr[1]) === 6) {
        return false;
    } else if (parseInt(newStr[0]) === 2 && parseInt(newStr[1]) === 7) {
        return false;
    } else if (parseInt(newStr[0]) === 2 && parseInt(newStr[1]) === 8) {
        return false;
    } else if (parseInt(newStr[0]) === 2 && parseInt(newStr[1]) === 9) {
        return false;
    } else if (parseInt(newStr[3]) === 6 || parseInt(newStr[3]) === 7 || parseInt(newStr[3]) === 8 || parseInt(newStr[3]) === 9) {
        return false;
    } else {
        return true;
    }
}
