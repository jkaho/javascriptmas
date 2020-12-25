// -------Challenge------- // 
// You are given an array of integers representing coordinates of obstacles situated on a straight line
// Assume that you are jumping from the point with coordinate 0 to the right
// You are allowed only to make jumps of the same length represented by some integer
// Find the minimal length of the jump enough to avoid all the obstacles

// -------My Solution------- // 
// function avoidObstacles(nums) {
//     var jump = 1;

//     for (var i = 0; i < 1; i++) {
//         const notDivisibleByJump = (currentValue) => currentValue % jump !== 0;

//         if (nums.every(notDivisibleByJump)) {
//             return jump;
//         } else {
//             jump++;
//             i--;
//         }
//     }
// }

// -------UI------- // 
var addBtn = document.getElementById("submit-num");
var submitBtn = document.getElementById("submit");
var numInputEl = document.getElementById("num");
var arrEl = document.getElementById("integer-arr");
var jumpEl = document.getElementById("jump");

function avoidObstacles(nums) {
    var jump = 1;

    for (var i = 0; i < 1; i++) {
        const notDivisibleByJump = (currentValue) => currentValue % jump !== 0;

        if (nums.every(notDivisibleByJump)) {
            return jump;
        } else {
            jump++;
            i--;
        }
    }
}
