// -------Challenge------- // 
// You are given a string s that consist of only lowercase English letters
// Vowels are given a value of 1
// Consonants are given a value of 2
// Return the sum of the letters in the input string 

function countVowelConsonant(str) {
    var sum = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            sum += 1;
        } else {
            sum += 2;
        }
    }
    
    return sum;
}
