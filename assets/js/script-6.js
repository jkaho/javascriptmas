// -------Challenge------- // 
// Given an array of strings, sort them in the order of increasing lengths
// If two strings have the same length, their relative order must be the same as in the initial array

// -------My Solution------- // 
// function sortByLength(strs) {
//     strs.sort(function(a, b) {
//         return a.length - b.length;
//     })
//     return strs;
// }

// -------UI------- // 
var stringBtn = document.getElementById("submit-string");
var submitBtn = document.getElementById("submit");
var stringInputEl = document.getElementById("string-input");
var stringArr = document.getElementById("string-array");
var sortedArr = document.getElementById("sorted-array");

var strs = [];

function addString(event) {
    event.preventDefault();

    var stringInput = stringInputEl.value;
    strs.push(stringInput);
    stringArr.textContent = strs;

    stringInputEl.value = "";
}

stringBtn.addEventListener("click", addString);

function sortByLength(event) {
    event.preventDefault();

    strs.sort(function(a, b) {
        return a.length - b.length;
    })

    sortedArr.textContent = strs;
    strs = [];
}

submitBtn.addEventListener("click", sortByLength);