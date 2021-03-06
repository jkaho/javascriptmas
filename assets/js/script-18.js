// -------Challenge------- // 
/* Given an array of integers, for each position i, search among the previous
    positions for the last (from the left) position that contains a smaller value
*/
// Store that value at position i in the anwer
// If no such value can be found, store -1 instead

// -------My Solution------- // 
// function arrayPreviousLess(nums) {
//     var newNums = [];

//     for (var i = 0; i < nums.length; i++) {
//         if (i === 0) {
//             newNums.push(-1);
//         } else {
//             var smallerPrevNums = [];
//             for (var j = 0; j < i; j++) {
//                 if (nums[j] < nums[i]) {
//                     smallerPrevNums.push(nums[j]);
//                 } 
//             }

//             if (smallerPrevNums.length === 0) {
//                 newNums.push(-1);
//             } else {
//                 newNums.push(smallerPrevNums[smallerPrevNums.length - 1]);
//             } 
//         }
//     }

//     return newNums;
// }

// -------UI------- // 
var addBtn = document.getElementById("submit-input");
var submitBtn = document.getElementById("submit");
var inputEl = document.getElementById("input");
var numsEl = document.getElementById("integer-arr");
var newArrEl = document.getElementById("new-arr");
var explanationLink = document.getElementById("explanation-link");
var explanation = document.getElementById("explanation");

nums = [];

function addToArray(event) {
    event.preventDefault();

    var input = parseInt(inputEl.value);
    if (inputEl.value === "") {
        alert("You must input a whole number.")
        return;
    } 

    nums.push(input);
    numsEl.textContent = nums;

    inputEl.value = "";
}

addBtn.addEventListener("click", addToArray);

function arrayPreviousLess() {
    var newNums = [];

    for (var i = 0; i < nums.length; i++) {
        if (i === 0) {
            newNums.push(-1);
        } else {
            var smallerPrevNums = [];
            for (var j = 0; j < i; j++) {
                if (nums[j] < nums[i]) {
                    smallerPrevNums.push(nums[j]);
                } 
            }

            if (smallerPrevNums.length === 0) {
                newNums.push(-1);
            } else {
                newNums.push(smallerPrevNums[smallerPrevNums.length - 1]);
            } 
        }
    }

    newArrEl.textContent = newNums;
    nums = [];
}

submitBtn.addEventListener("click", arrayPreviousLess);

explanationLink.addEventListener("click", function() {
    if (explanation.className === "hide") {
        explanation.removeAttribute("class");
        explanationLink.textContent = "Click to hide explanation";
    } else {
        explanation.setAttribute("class", "hide");
        explanationLink.textContent = "Click for further explanation on example";
    }
})
