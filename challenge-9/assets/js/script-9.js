// -------Challenge------- // 
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num 
// The first two numbers in the Fibonacci sequence are 1 and 1 
// Every additional number in the sequence is the sum of the two previous numbers
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8

// -------My Solution------- // 
function sumOddFibonacciNumbers(num) {
    var fibonacciSequence = [1, 1];
    for (var i = 0; i <= num; i++) {
        var fibonacciNumber = fibonacciSequence[i] + fibonacciSequence[i + 1];
        fibonacciSequence.push(fibonacciNumber);
        console.log(fibonacciSequence);
    }
}

sumOddFibonacciNumbers(10);