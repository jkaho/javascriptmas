// -------Challenge------- // 
// Use JS to count characters
// Dynamically show the characters used / characters remaining
// Disable the Tweet button if maximum character limit is exceeded
// If there are 0 characters left, we should still be able to tweet 
// When character count is below 20 characters, character count turns red
// Hints: keydown event listener & input.value.length property

// -------My Solution------- // 
var tweetBtn = document.getElementById("btn");
var textInputEl = document.getElementById("string");
var counterEl = document.getElementById("counterFooter");

function countCharacters() {
    var textInput = textInputEl.value;
    var inputLength = textInput.length;

    counterEl.textContent = 140 - inputLength + "/140";

    if (inputLength > 140) {
        tweetBtn.setAttribute("class", "buttonDisabled");
    } else {
        tweetBtn.removeAttribute("class", "buttonDisabled");
    }
    
    if (inputLength >= 120) {
        counterEl.setAttribute("style", "color: red");
    } else {
        counterEl.removeAttribute("style", "color: red");
    }
}

document.addEventListener("keyup", countCharacters);

// -------Issues/Notes------- // 
/* 
    1. Don't know how to use "keydown" event listener to create functionality
        If you find the value of input.value.length within the event listener function,
        it will return the value from WHEN a key is pressed, not after i.e. if the textbox 
        is empty and you press one key (enter one character), the value of input.value.length
        will be 0 (the textbox was empty when the key was pressed), not 1, thus the counter
        doesn't decrease/increase at the same time as the keys are typed
    
    2. "keyup" event listener shortcomings: 
        - Counter doesn't increase if you hold down backspace, only once you lift the key
    3. In real context, use "maxlength" attribute for textarea element to limit characters
*/

