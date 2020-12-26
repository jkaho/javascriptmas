// -------Challenge------- // 
// Transform a given sentence into a new one with dashes between each two consecutive letters
// Leave spaces alone 

// -------My Solution------- // 
function insertDashes(sentence) {
    var result = [];
    var arr = sentence.split(" ");

    for (var i = 0; i < arr.length; i++) {
        var groupOfLetters = arr[i].split("");
        var joinedGroupOfLetters = groupOfLetters.join("-");
        result.push(joinedGroupOfLetters);
    }

    var joinedResult = result.join(" ");
    return joinedResult;
}

