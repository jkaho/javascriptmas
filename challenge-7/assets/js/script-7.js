// -------Challenge------- // 
// You are given a string s that consist of only lowercase English letters
// Vowels are given a value of 1
// Consonants are given a value of 2
// Return the sum of the letters in the input string 

// -------My Solution------- // 
// function countVowelConsonant(str) {
//     var sum = 0;

//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
//             sum += 1;
//         } else {
//             sum += 2;
//         }
//     }

//     return sum;
// }

// -------UI------- // 
var submitBtn = document.getElementById("submit");
var stringInputEl = document.getElementById("string-input");
var sumEl = document.getElementById("sum");

function countVowelConsonant() {
    var str = stringInputEl.value.toLowerCase();
    var sum = 0;
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "]"];

    for (var i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            sum += 1;
        } else if (numbers.includes(str[i]) || specialCharacters.includes(str[i])) {
            alert("Invalid input. Insert alphabetic characters only.");
            return;
        } else {
            sum += 2;
        }
    }

    sumEl.textContent = sum;
}

submitBtn.addEventListener("click", countVowelConsonant);
