// -------Challenge------- // 
// Check whether the given string is a subsequence of the plaintext alphabet 
// If characters in the string are not in alphabetical order, output should be false
// If there are duplicate characters, output should be false

// -------My Solution------- // 
function alphabetSubsequence(str) {
    var chars = [];
    var splitStr = str.split("");

    for (var i = 0; i < splitStr.length; i++) {
        if (i !==  splitStr.length && str.charCodeAt(i) > str.charCodeAt(i + 1)) {
            return false;
        } else if (chars.includes(splitStr[i]) === true) {
            return false;
        } else {
            chars.push(splitStr[i]);
            if (chars.length === splitStr.length) {
                return true;
            }
        } 
    }
}
