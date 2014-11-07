/*
 Amaren Read
 WPF Sec 01
 Expressions Personal
 11-4-14
 */

//alert("Testing 1,2,3");

//Create a js file that will tell how much money is needed to buy a new mouse

//Ask the user their name

var name = prompt("Type in your name please:");

//Hi to the user

alert("Hi "+name+"! Let's see how much money you have toward a new mouse.")

//Print out name to console

console.log("Hi "+name+"! Let's see how much money you have toward a new mouse.")

//Prompt user to see what type of mouse they would like to get

var mouseType = prompt("What type of mouse would you like to buy?");

//Ask how much they have saved

var moneySaved = prompt("How much money do you have saved toward a new mouse?");

//Print out money saved to console

console.log(moneySaved+ " how much money user has saved toward a new mouse.");

//Take savings and subtract it from mouse price

var mousePrice = 40;

//Alert user about how much the mouse type would cost

alert("A "+mouseType+" is usually "+mousePrice+" dollars.");

//Printout type of mouse and mouse price to console

console.log(mouseType+ " estimated price of a new mouse.");

//Alert user of how much is saved

alert("You have " +moneySaved+" right now.");

//Print out money saved to console

console.log("You have " +moneySaved+" right now.");

//Calculate how much money is needed toward savings

var moneyNeeded = mousePrice - moneySaved;

//Print out mouse price minus the money saved to console

console.log(moneyNeeded+ " mouse price minus the money saved.");

//Alert user how much they will need

alert(name+" you will need " +moneyNeeded+" for the new mouse.");

//Print out name and money needed to console

console.log(name+" you will need " +moneyNeeded+" for the new mouse.");
