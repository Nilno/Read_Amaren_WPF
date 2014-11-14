/*
 Amaren Read
 WPF Sec 01
 Conditionals Wacky
 11-13-14
 */

//Duck or a Goose

//How much game system costs

var userD = "Duck";

var userG = "Goose";

//Prompt user for name

var name = prompt("Hello, what is your name?");

//re-prompt for name of user

if(name === ""){

 name = prompt("Could you please type in your name.");
}

//Prompt user to see if they would rather be a duck or a goose

 var userDG = prompt("Would you rather be a duck or a goose " +name+ "?");

//re-prompt user if they leave duck or goose blank

if(userDG === "")

 userDG = prompt ("Please type in if you would rather be a duck or a goose " +name+ "?");

//Prompt user to see if they honk or quack

 userG = prompt("Do you honk or quack " +name+ "?");

//re-prompt user to see if they honk or quack

if(userG === ""){

 prompt("Please type in if you honk or quack " +name+ "?");

}

//If user responds with "goose"

if(userDG === "goose"){

//Alert user telling them they are a goose and print to console
 alert("You are a goose! " +name+ ".") + console.log("You are a goose! " +name+ ".");

//If user responds with "duck"

}else{

//Alert user they are a duck and print to console

 alert("You are a duck! " +name) + console.log("You are a duck! " +name);
}