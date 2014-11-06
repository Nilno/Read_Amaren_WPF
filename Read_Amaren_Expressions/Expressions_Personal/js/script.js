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

alert("Hi "+name+"! Let's see how much money you have toward new hardware")

//Ask how much they have saved

var moneySaved = prompt("How much money do you have saved toward new hardware?");

//Print out response in console

console.log(moneySaved);

//Take savings and subtract it from mouse price

var mousePrice = 40.00;

//Calculate how much money is needed from savings

var moneyNeeded = mousePrice - moneySaved;

//Alert user of how much is saved

alert(name+" you have " +moneySaved+" right now.");


