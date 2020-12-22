// -------Challenge------- // 
// You have deposited a specific amount of dollars into your bank account
// Each year, your balance increases at the same growth rate
// Find out how long it would take for your balance to pass a specific threshold
// Assumption: you don't make any additional deposits 

// -------My Answer------- // 
function depositProfit(deposit, rate, threshold) {
    var year = 1;
    for (var i = 0; i <= 1; i++) {
        var balance = deposit * ((100 + rate) / 100) ** year;
        if (balance < threshold) {
            i--;
            year++;
        } else {
            return year;
        }
    }    
}
