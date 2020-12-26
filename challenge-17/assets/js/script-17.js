// -------Challenge------- // 
// Given a string, find the number of different characters in it 

// -------My Solution------- // 
// function differentSymbolsNaive(str) {
//     var chars = [];
//     for (var i = 0; i < str.length; i++) {
//         if (chars.includes(str[i]) === false) {
//             chars.push(str[i])
//         }
//     }
//     return chars.length;
// }

// -------UI------- // 
var submitBtn = document.getElementById("submit");
var inputEl = document.getElementById("input");
var characterEl = document.getElementById("chars");

function differentSymbolsNaive() {
    var str = inputEl.value;
    var chars = [];

    for (var i = 0; i < str.length; i++) {
        if (chars.includes(str[i]) === false) {
            chars.push(str[i])
        }
    }

    characterEl.textContent = chars.length;
}

submitBtn.addEventListener("click", differentSymbolsNaive);