// -------Challenge------- // 
// Given an array of integers, remove each kth element from it

// -------My Solution------- // 
// function extractEachKth(nums, index) {
//     var extractedArr = nums.filter(num => indexOf(num) % index !== 0);
//     return extractedArr;
// }

// -------UI------- // 
var addBtn = document.getElementById("add");
var submitBtn = document.getElementById("submit");
var numInputEl = document.getElementById("num");
var kInputEl = document.getElementById("k");
var arrEl = document.getElementById("num-array");
var extractedArrEl = document.getElementById("extracted-array");
var clearBtn = document.getElementById("clear");
var backspaceBtn = document.getElementById("backspace");

var nums = [];

function addToArray(event) {
    event.preventDefault();

    var num = numInputEl.value;
    if (num === "") {
        alert("You must input a number");
        return;
    } else {
        nums.push(num);
    }
    arrEl.textContent = nums;

    numInputEl.value = "";
}

addBtn.addEventListener("click", addToArray);

function extractEachKth(event) {
    event.preventDefault();

    var index = kInputEl.value;
    var extractedArr = [];
    for (var i = 0; i < nums.length; i++) {
        if (parseInt((i + 1)) % index !== 0) {
            extractedArr.push(nums[i]);
        };

    }
    extractedArrEl.textContent = extractedArr;
}

submitBtn.addEventListener("click", extractEachKth);

clearBtn.addEventListener("click", function() {
    nums = [];
    arrEl.textContent = nums;
})

backspaceBtn.addEventListener("click", function() {
    nums.splice(nums.length - 1, 1);
    arrEl.textContent = nums;
})

