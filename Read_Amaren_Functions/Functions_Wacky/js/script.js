/*
 Amaren Read
 WPF Sec 01
 Functions Wacky
 11-20-14
 */

//Alert user to let them know what we are going to do

alert("Hello there and welcome to number flicking.")

//Name of user

var name = prompt("Will you type in your name please?");

//re-prompt for name of user

while(name === ""){

 name = prompt("Please type in your name.")
}

//Setup vars for giving the user numbers to flick

//Prompt user asking what number they would like to flick

var firstNum = prompt("Please pick a number between 0 and 20 that you would like to flick first " +name+ " ?");

//Re-prompt user if user input is not a number or user input is blank

while(isNaN(firstNum) || firstNum==="") {

 firstNum = prompt("Please type in a number between 0 and 20 " + name + ".")

}

var highNum = prompt("What is the highest number you would like to flick " +name+ "?");

//Reprompt user if user input is not a number or user input is blank

while(isNaN(highNum) || highNum==="") {

 highNum = prompt(+name+ ", Please type in the highest number you would like to flick.")

}


