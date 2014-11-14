/*
 Amaren Read
 WPF Sec 01
 Conditionals Personal
 11-13-14
 */

//Saveing for a new game system

//How much game system costs

var gameSystem = "300";

//Prompt user for name

var name = prompt("Hello, what is your name?");

//re-prompt for name of user

if(name === ""){

 name = prompt("Could you please type in your name.");
}

//Prompt user for how much they make in a week

var userMoney = prompt("How much money do you make in a week " +name+ ".");

//re-prompt user if they leave how much they make in a week blank

if(userMoney === "")

userMoney = prompt ("Please type in how much money you make in a week.");

//Prompt user to see how much they have in savings

var savings = prompt("Please type in how much you have in savings " +name+ ".");

//re-prompt user to see how much they have in savings.

if(savings === ""){

 savings = prompt("Type in how much you have for savings please. " +name+ ".");

}

(gameSystem <= userMoney && savings) ? alert("You can by the game system!") + console.log("You can by the game system!") : alert("Sorry but you can't buy the game system.") + console.log("Sorry but you can't buy the game system.");
