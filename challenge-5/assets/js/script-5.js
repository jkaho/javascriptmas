// -------Challenge------- // 
// Reverse the provided string
// You may need to turn the string into an array before you can reverse it
// Your result must be a string

// -------My Solution------- // 
// function reverseAString(str) {
//     var reversedString = "";

//     for (var i = 1; i <= str.length; i++) {
//         reversedString += str[str.length - i];
//     }

//     return reversedString;
// }

// -------UI------- // 
var submitBtn = document.getElementById("submit");
var stringInputEl = document.getElementById("string-input");
var reversedStringEl = document.getElementById("reversed-string");

function reverseAString() {
    var str = stringInputEl.value;
    var reversedString = "";

    for (var i = 1; i <= str.length; i++) {
        reversedString += str[str.length - i];
    }

    reversedStringEl.textContent = reversedString;
}

submitBtn.addEventListener("click", reverseAString);

