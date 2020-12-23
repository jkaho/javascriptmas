// -------Challenge------- // 
// Given an array of integers find the pair of adjacent elements that has the largest product
// Return that product

// -------My Solution------- // 
function adjacentElementsProduct(nums) {
    var adjacentProducts = [];
    for (var i = 0; i < nums.length - 1; i++) {
        var product = nums[i] * nums[i + 1];
        adjacentProducts.push(product);
    }

    var sortedProducts = adjacentProducts.sort(function(a, b) {
        return a - b;
    });

    return sortedProducts[sortedProducts.length - 1];
}
