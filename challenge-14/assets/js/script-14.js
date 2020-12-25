// -------Challenge------- // 
// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements

// -------My Solution------- // 
function arrayMaximalAdjacentDifference(nums) {
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

    return differences[differences.length - 1];
}
