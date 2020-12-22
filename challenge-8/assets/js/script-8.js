/*
// -------Challenge------- // 
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.
*/

// -------My Solution------- // 
var dice = document.getElementsByClassName("dice");

function rollingDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
}