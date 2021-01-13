// -------Challenge------- // 
// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements

// -------My Solution------- // 
// function arrayMaximalAdjacentDifference(nums) {
//     function findDifference(a, b) {
//         return Math.abs(a - b);
//     }

//     var differences = [];
//     for (var i = 0; i < nums.length - 1; i++) {
//         var difference = findDifference(nums[i], nums[i + 1]);
//         differences.push(difference);
//     }

//     differences.sort(function(a, b) {
//         return a - b;
//     })

//     return differences[differences.length - 1];
// }

// -------UI------- // 
var addBtn = document.getElementById("add");
var submitBtn = document.getElementById("submit");
var integerInputEl = document.getElementById("integer");
var integerArr = document.getElementById("integer-array");
var maximalDiffEl = document.getElementById("maximal-diff");
var clearBtn = document.getElementById("clear");
var backspaceBtn = document.getElementById("backspace");

var nums = [];

function addToArray(event) {
    event.preventDefault();

    var integer = parseInt(integerInputEl.value);
    if (integerInputEl.value === "") {
        alert("Invalid input. Please input a whole number.");
        return;
    }

    nums.push(integer);
    integerArr.textContent = nums;

    integerInputEl.value = "";
}

addBtn.addEventListener("click", addToArray);

function arrayMaximalAdjacentDifference() {
    function findDifference(a, b) {
        return Math.abs(a - b);
    }

    var differences = [];
    for (var i = 0; i < nums.length - 1; i++) {
        var difference = findDifference(nums[i], nums[i + 1]);
        differences.push(difference);
    }

    differences.sort(function(a, b) {
        return a - b;
    })

    maximalDiffEl.textContent = differences[differences.length - 1];
}

submitBtn.addEventListener("click", arrayMaximalAdjacentDifference);

clearBtn.addEventListener("click", function() {
    nums = [];
    integerArr.textContent = nums;
})

backspaceBtn.addEventListener("click", function() {
    nums.splice(nums.length - 1, 1);
    integerArr.textContent = nums;
})

