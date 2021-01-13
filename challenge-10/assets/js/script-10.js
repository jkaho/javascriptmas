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

var integerArr = [];
var adjacentProductsArr = [];

function addIntegerToArr(event) {
    event.preventDefault();

    if (numInputEl.value !== "") {
        var nums = numInputEl.value;
        integerArr.push(nums);
    } else {
        alert("Invalid input. Please type an integer.")
    }

    arrEl.textContent = integerArr;
    numInputEl.value = "";
}

numBtn.addEventListener("click", addIntegerToArr);

function adjacentElementsProduct(event) {
    event.preventDefault();

    for (var i = 0; i < integerArr.length - 1; i++) {
        var product = integerArr[i] * integerArr[i + 1];
        adjacentProductsArr.push(product);
    }

    var sortedProducts = adjacentProductsArr.sort(function(a, b) {
        return a - b;
    });

    largestProductEl.textContent = sortedProducts[sortedProducts.length - 1];
    integerArr = [];
}

submitBtn.addEventListener("click", adjacentElementsProduct);
