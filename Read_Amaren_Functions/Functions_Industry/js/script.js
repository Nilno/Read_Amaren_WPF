/*
 Amaren Read
 WPF Sec 01
 Functions Industry
 11-20-14
 */

//Name of user

var name = prompt("Hello, what is your name?");

//re-prompt for name of user

while(name === ""){

 name = prompt("Could you please type in your name.")
}

//alert user letting them know what we are doing

alert("We are going to try to figure out what the circumference of a circle is for your garden " +name+ ".");

//Setup vars for calculation

//Prompt user asking for short hand numerical of PI

var whatPi = prompt("What is the short hand numerical value of PI " +name+ " ?");

//Reprompt user if user input is not a number or user input is blank

  while(isNaN(whatPi) || whatPi==="") {

 whatPi = prompt("Please type in the short hand numerical value of PI " + name + ".")

}

 var cirDiameter = prompt("Please type in a number that is the diameter of your circular garden " +name+ ".");

//Reprompt user if user input is not a number or user input is blank

  while(isNaN(cirDiameter) || cirDiameter==="") {

 cirDiameter = prompt("Please type in a number that is the diameter of your circular garden " + name + ".")

}

//Call the function

var circleCir = diaPi(whatPi, cirDiameter);

//Print circle circumference to console

console.log("The circumference of the garden circle, " +name+ ", is " +circleCir+ ".")

//Alert user what the circle circumference is

alert("The circumference of the garden circle, " +name+ ", is " +circleCir+ ".")

//Function to calculate the circumference

function diaPi(pi,dia){

//Multiplying PI times diameter and return

 var total = Math.round(pi * dia);

     return total;
}
