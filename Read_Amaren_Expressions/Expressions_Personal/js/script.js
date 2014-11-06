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

console.log("Hi "+name+"! Let's see how much money you have toward a new mouse.")

//Prompt user to see what type of mouse they would like to get

prompt("What type of mouse would you like to buy?");

//Ask how much they have saved

var moneySaved = prompt("How much money do you have saved toward a new mouse?");

//Print out response in console

console.log(moneySaved);

//Take savings and subtract it from mouse price

var mousePrice = 40;

//Alert user of how much is saved

alert(name+" you have " +moneySaved+" right now.");

console.log(name+" you have " +moneySaved+" right now.");

//Calculate how much money is needed toward savings

var moneyNeeded = mousePrice - moneySaved;

console.log(moneyNeeded);

//Alert user how much they will need

alert(name+" you will need " +moneyNeeded+" for the new hardware.");

console.log(name+" you will need " +moneyNeeded+" for the new hardware.");
