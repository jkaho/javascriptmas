// -------Challenge------- // 
// Given an array of integers, remove each kth element from it

// -------My Solution------- // 
function extractEachKth(nums, index) {
    var extractedArr = nums.filter(num => num % index !== 0);
    return extractedArr;
}

