// -------Challenge------- // 
// Given an array of integers find the pair of adjacent elements that has the largest product
// Return that product

// -------My Solution------- // 
// function adjacentElementsProduct(nums) {
//     var adjacentProducts = [];
//     for (var i = 0; i < nums.length - 1; i++) {
//         var product = nums[i] * nums[i + 1];
//         adjacentProducts.push(product);
//     }

//     var sortedProducts = adjacentProducts.sort(function(a, b) {
//         return a - b;
//     });

//     return sortedProducts[sortedProducts.length - 1];
// }

// -------UI------- // 
var numBtn = document.getElementById("submit-num");
var submitBtn = document.getElementById("submit");
var numInputEl = document.getElementById("num");
var arrEl = document.getElementById("integer-arr");
var largestProductEl = document.getElementById("largest-product");

var adjacentProducts = [];

function addIntegerToArr() {
    if (numInputEl.value !== "") {
        var nums = numInputEl.value;
        adjacentProducts.push(nums);
    } else {
        alert("Invalid input. Please type an integer.")
    }

    arrEl.textContent = adjacentProducts;
}

numBtn.addEventListener("click", addIntegerToArr);

function adjacentElementsProduct() {
    for (var i = 0; i < nums.length - 1; i++) {
        var product = nums[i] * nums[i + 1];
        adjacentProducts.push(product);
    }

    var sortedProducts = adjacentProducts.sort(function(a, b) {
        return a - b;
    });

    return sortedProducts[sortedProducts.length - 1];
}
