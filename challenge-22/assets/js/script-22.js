// -------Challenge------- // 
/* 
    Given a rectangular matrix and an integer column, return an array contianing 
    the elements of the columnth column of the given matrix (the leftmost column
    is the 0th one)
*/

// -------My Solution------- // 
function extractMatrixColumn(matrix, column) {
    var result = [];

    for (var i = 0; i < matrix.length; i ++) {
        var colNumber = matrix[i][column];
        result.push(colNumber);
    }

    return result;
}

// -------UI------- // 
var addBtn = document.getElementById("submit-arr");
var removeLastBtn = document.getElementById("remove-last");
var clearBtn = document.getElementById("clear-all");
var submitBtn = document.getElementById("submit");
var integerArrEl = document.getElementById("arr");
var colEl = document.getElementById("col");
var matrixEl = document.getElementById("matrix");
var extractedArrEl = document.getElementById("extracted-arr");

var matrix = [];

function addArrToMatrix() {
    var arr = integerArrEl.value.split(",");
    var intArr = [];
    console.log(arr);

    var alphabet = "abcdefghijklmnopqrstuvqxyzABCDEFGHIJKLMNOPQRSTUVQXYZ";
    var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (alphabet.includes(arr[i][j]) || specialChars.includes(arr[i][j])) {
                alert("Invalid input. Only integers separated by commas are accepted.");
                return;
            }
        } 

        var integer = parseInt(arr[i]);
        if (integer !== NaN) {
            intArr.push(integer);
        } else {
            alert("Invalid input. Only integers separated by commas are accepted.");
            return;
        }
    }

    matrix.push(intArr);
    matrixEl.textContent = matrix;
    integerArrEl.value = "";
}

addBtn.addEventListener("click", addArrToMatrix);
