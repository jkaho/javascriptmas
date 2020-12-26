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
var arrEl = document.getElementById("integer-arr");
var newArrEl = document.getElementById("new-arr");

function arrayPreviousLess(nums) {
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

    return newNums;
}
