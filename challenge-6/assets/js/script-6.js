// -------Challenge------- // 
// Given an array of strings, sort them in the order of increasing lengths
// If two strings have the same length, their relative order must be the same as in the initial array

// -------My Solution------- // 
function sortByLength(strs) {
    strs.sort(function(a, b) {
        return a.length - b.length;
    })
    return strs;
}
