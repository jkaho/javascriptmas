// -------Challenge------- // 
// n children have got m pieces of candy 
// They want to eat as much candy as they can
// Each child must eat exactly the same amount of candy as any other child
// Individual pieces of candy cannot be split
// Determine how many pieces of candy will be eaten by all the children together

// -------My Solution------- // 
// function candies(children, candy) {
//     var portionEach = Math.floor(candy / children);
//     var candies = portionEach * children;
//     return candies;
// }

// -------UI------- // 
var submitBtn = document.getElementById("submit");
var childrenInputEl = document.getElementById("children-input");
var candyInputEl = document.getElementById("candy-input");
var portionEl = document.getElementById("portion");
var candyEl = document.getElementById("candies");
var leftoverEl = document.getElementById("leftover");

function renderCandies(event) {
    event.preventDefault();
    
    var children = childrenInputEl.value;
    var candy = candyInputEl.value;
    var portionEach = Math.floor(candy / children);
    var candies = portionEach * children;
    var leftover = candy % children;

    portionEl.textContent = portionEach + " candies";
    candyEl.textContent = candies;
    leftoverEl.textContent = leftover;
}

submitBtn.addEventListener("click", renderCandies);