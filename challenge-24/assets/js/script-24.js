// -------Challenge------- // 
/*
    Make a counter that increments every 75ms in the spin() function and display
    whether the player wins or loses in the stop() function
*/ 

//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
var pushed = false //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
var spinningElem = document.getElementById('spinning'); //The spinning number

//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);

//When the stop button is pushed
function buttonPressed(){
    pushed = true;
}

//set the target Int
function setTargetInt(){
    var targetElem = document.getElementById('targetNum');
    targetInt=Math.floor(Math.random() * 101)
    targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// //EDIT THIS FUNCTION
// const spin = async () => {
//     //WRITE YOUR CODE HERE
//         stop(i); //Trigger this function when the STOP button has been pushed
//         await sleep(75) //Paste this wherever you need to sleep the incrimentor 
     
  
// }

// //EDIT THIS FUNCTION
// function stop(i){
//     //WRITE YOUR CODE HERE
//     var result = document.getElementById('result'); //display your result message here
        
// }

const spin = async () => {
    for (var i = 0; i < 101; i++) {
        if (i === 100){
            i = 0;
        }    

        if (pushed === true) {
            stop(i);  
            break;
        } else {
            spinningElem.textContent = i;
            await sleep(75) 
        } 
    }
}
// *Note: Looked at solution for lines 51-54, 58, 61 (didn't get how 'await' worked)

function stop(i){
    var result = document.getElementById('result'); //display your result message here
    var difference = Math.abs((i - 1) - targetInt);

    if (difference === 0) {
        result.textContent = "Congratulations, you're a winner! You hit the target!"
    } else {
        result.textContent = "Oh no, you lose! Off by " + difference; 
    }
}

//main
setTargetInt();
spin()