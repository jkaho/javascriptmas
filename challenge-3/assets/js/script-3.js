// -------Challenge------- // 
// Write a function that splits an array (1st argument) into groups the length of size (2nd argument)
// Return them as a two-dimensional array

// -------My Solution------- // 
// function chunkyMonkey(values, size) {
//     var arr = [];
//     var sliceEnd = size;
//     for (var i = 0; i < values.length; i += size) {
//         var slicedArr = values.slice(i, sliceEnd);
//         sliceEnd += size;

//         arr.push(slicedArr);
//     }
//     return arr;
// }

// -------UI------- // 
var valueBtn = document.getElementById("submit-values");
var submitBtn = document.getElementById("submit");
var valueInputEl = document.getElementById("value-input");
var sizeInputEl = document.getElementById("size-input");
var arrayEl = document.getElementById("array");
var newArrayEl = document.getElementById("2d-array");

var values = [];

function addValues() {
    var value = valueInputEl.value;
    values.push(value);
    
    var valueSpan = document.createElement("span");
    valueSpan.textContent = "\"" + value + "\", ";
    arrayEl.appendChild(valueSpan);
}

valueBtn.addEventListener("click", addValues);

function renderChunkyMonkey() {
    var arr = [];
    var size = parseInt(sizeInputEl.value);
    var sliceEnd = size;
    for (var i = 0; i < values.length; i += size) {
        var slicedArr = values.slice(i, sliceEnd);
        sliceEnd += size;
        console.log(i);
        console.log(sliceEnd);
        arr.push(slicedArr);
    }
    console.log(arr);
    newArrayEl.textContent = arr;
}

submitBtn.addEventListener("click", renderChunkyMonkey);
