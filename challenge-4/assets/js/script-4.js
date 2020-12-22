// -------Challenge------- // 
// Given a year, return the century it is in
// The first century spans from the year 1 up to and including the year 11
// The second spans from year 101 up to and including the year 200, etc. 

// -------My Solution------- // 
function centuryFromYear(num) {
    if (num % 100 !== 0) {
        console.log(Math.floor(num / 100 + 1));
    } else {
        console.log(Math.floor(num / 100));
    }
}
