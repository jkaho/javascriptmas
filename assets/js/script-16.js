// -------Challenge------- // 
// Transform a given sentence into a new one with dashes between each two consecutive letters
// Leave spaces alone 

// -------My Solution------- // 
// function insertDashes(sentence) {
//     var result = [];
//     var arr = sentence.split(" ");

//     for (var i = 0; i < arr.length; i++) {
//         var groupOfLetters = arr[i].split("");
//         var joinedGroupOfLetters = groupOfLetters.join("-");
//         result.push(joinedGroupOfLetters);
//     }

//     var joinedResult = result.join(" ");
//     return joinedResult;
// }

// -------UI------- // 
var submitBtn = document.getElementById("submit");
var inputEl = document.getElementById("input");
var textEl = document.getElementById("new-text");

function insertDashes(event) {
    event.preventDefault();
    
    var sentence = inputEl.value;
    var result = [];
    var arr = sentence.split(" "); // spaces are removed here

    for (var i = 0; i < arr.length; i++) {
        var groupOfLetters = arr[i].split("");
        var joinedGroupOfLetters = groupOfLetters.join("-");
        result.push(joinedGroupOfLetters);
    }

    var joinedResult = result.join(" ");
    textEl.textContent = joinedResult;

    inputEl.value = "";
}

submitBtn.addEventListener("click", insertDashes);