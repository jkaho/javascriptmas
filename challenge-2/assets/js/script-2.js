// -------Challenge------- // 
// You have deposited a specific amount of dollars into your bank account
// Each year, your balance increases at the same growth rate
// Find out how long it would take for your balance to pass a specific threshold
// Assumption: you don't make any additional deposits 

// -------My Solution------- // 
// function depositProfit(deposit, rate, threshold) {
//     var year = 1;
//     for (var i = 0; i <= 1; i++) {
//         var balance = deposit * ((100 + rate) / 100) ** year;
//         if (balance < threshold) {
//             i--;
//             year++;
//         } else {
//             return year;
//         }
//     }    
// }

// -------UI------- // 
var submitBtn = document.getElementById("submit");
var depositInputEl = document.getElementById("deposit-input");
var rateInputEl = document.getElementById("rate-input");
var thresholdInputEl = document.getElementById("threshold-input");
var yearsEl = document.getElementById("years");

function renderDepositProfit() {
    var deposit = parseInt(depositInputEl.value);
    var rate = parseInt(rateInputEl.value);
    var threshold = parseInt(thresholdInputEl.value);
    var year = 1;

    for (var i = 0; i <= 1; i++) {
        var balance = deposit * ((100 + rate) / 100) ** year;

        if (balance < threshold) {
            i--;
            year++;
        } else {
            yearsEl.textContent = year;
        }
    } 
    balance = 0;
}

submitBtn.addEventListener("click", renderDepositProfit);

