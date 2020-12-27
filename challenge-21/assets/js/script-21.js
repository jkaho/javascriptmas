// -------Challenge------- // 
// You have two integer arrays, a and b, and an integer target value, v
/* 
    Determine whether there is a pair of numbers, where one number is taken from a and
    the other from b, that can be added together to get a sum of v
*/
// Return true if such a pair exists, otherwise return false 

// -------My Solution------- // 
// function sumOfTwo(nums1, nums2, value) {
//     var sums = [];

//     for (var i = 0; i < nums1.length; i++) {
//         for (var j = 0; j < nums2.length; j++) {
//             var num1PlusNum2 = nums1[i] + nums2[j];
//             sums.push(num1PlusNum2);
//         }
//     }

//     if (sums.includes(value)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// -------UI------- // 
var addToArray1Btn = document.getElementById("submit-num1");
var addToArray2Btn = document.getElementById("submit-num2");
var submitBtn = document.getElementById("submit");
var arr1InputEl = document.getElementById("num1");
var arr2InputEl = document.getElementById("num2");
var valueInputEl = document.getElementById("value");
var sumCheckerEl = document.getElementById("sum-checker");

function sumOfTwo(nums1, nums2, value) {
    var sums = [];

    for (var i = 0; i < nums1.length; i++) {
        for (var j = 0; j < nums2.length; j++) {
            var num1PlusNum2 = nums1[i] + nums2[j];
            sums.push(num1PlusNum2);
        }
    }

    if (sums.includes(value)) {
        return true;
    } else {
        return false;
    }
}
