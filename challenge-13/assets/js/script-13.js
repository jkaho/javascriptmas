// -------Challenge------- // 
// Given an array of integers, remove each kth element from it

// -------My Solution------- // 
// function extractEachKth(nums, index) {
//     var extractedArr = nums.filter(num => num % index !== 0);
//     return extractedArr;
// }

// -------UI------- // 
var addBtn = document.getElementById("add");
var submitBtn = document.getElementById("submit");
var numInputEl = document.getElementById("num");
var kInputEl = document.getElementById("k");
var arrEl = document.getElementById("num-array");
var extractedArrEl = document.getElementById("extracted-array");

nums = [];

function addToArray() {
    var num = numInputEl.value;
    nums.push(num);
    arrEl.textContent = nums;
}

addBtn.addEventListener("click", addToArray);

function extractEachKth(nums, index) {
    var extractedArr = nums.filter(num => num % index !== 0);
    return extractedArr;
}