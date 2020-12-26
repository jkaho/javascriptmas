// -------Challenge------- // 
// Given a string, find the number of different characters in it 

// -------My Solution------- // 
function differentSymbolsNaive(str) {
    var chars = [];
    for (var i = 0; i < str.length; i++) {
        if (chars.includes(str[i]) === false) {
            chars.push(str[i])
        }
    }
    return chars.length;
}

