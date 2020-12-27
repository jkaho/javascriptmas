// -------Challenge------- // 
/* 
    Given a rectangular matrix and an integer column, return an array contianing 
    the elements of the columnth column of the given matrix (the leftmost column
    is the 0th one)
*/

function extractMatrixColumn(matrix, column) {
    var result = [];

    for (var i = 0; i < matrix.length; i ++) {
        var colNumber = matrix[i][column];
        result.push(colNumber);
    }
    
    return result;
}

