/*
 Amaren Read
 WPF Sec 01
 Expressions Industry
 11-6-14
 */

//alert("Testing 1,2,3");

//I currently do side jobs in gardening.

//Ask the user their name

var name = prompt("Type in your name please:");

//Alert to welcome the user

alert("Hello "+name+"! Let's see how much soil you will need to plant a tree.")

//Print out name to console

console.log("Hello "+name+"! Let's see how much soil you will need to plant a tree.")

//Prompt user to see how much soil they have

var haveSoil = prompt("How much soil do u have "+name+" ?");

//Create array to see total amount of soil

var soilBins = [20, 30];

//Calculate wood total amount of soil

var soilTotal = soilBins[0] + soilBins[1];

//Alert user stating how much soil they have.

alert("You have "+haveSoil+ " amounts of soil.");

//Print out total amount of soil from soil pile to console

console.log(haveSoil+ " from soil pile.");

//Alert user to ask if they have the  of soil from the total amount of soil.

alert("You have "+haveSoil+" from "+soilTotal+" amounts from soil pile.");

//Printout of user to ask if they have the  of soil from the total amount of soil.

console.log("You have "+haveSoil+" from "+soilTotal+" amounts from soil pile.");

//Calculate total amount of soil subtracted from the amount the user has

var moreSoil = soilTotal - parseInt(haveSoil);

//Print out total amount of soil subtracted from the amount the user has

console.log(moreSoil+ " amounts of soil subtracted from the amount the user has.");

//Alert user how much soil they will need from

alert(name+ " you will need " +moreSoil+" amounts of soil to plant the tree.");

//Print out name and how much soil in order to plant the tree to console

console.log(name+ " you will need " +moreSoil+" amounts of soil to plant the tree.");
