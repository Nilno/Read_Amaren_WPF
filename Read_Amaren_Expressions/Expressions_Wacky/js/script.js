/*
 Amaren Read
 WPF Sec 01
 Expressions Wacky
 11-6-14
 */

/*
 Amaren Read
 WPF Sec 01
 Expressions Wacky
 11-6-14
 */
//alert("Testing 1,2,3");

//Create a js file that will tell how much money is needed to buy a new mouse

//Ask the user their name

var name = prompt("Type in your name please:");

//Hi to the user

alert("Welcome to the woods "+name+"! Let's see how much wood you can chuck.")

//Print out name to console

console.log("Welcome to the woods "+name+"! Let's see how much wood you can chuck.")

//Prompt user to see how much wood they think they can chuck

var woodThink = prompt("How much wood do u think you can chuck "+name+" ?");

//Create array to see total amount of wood

var woodBins = [200, 300];

//Calculate wood total amount of wood

var woodTotal = woodBins[0] + woodBins[1];

//Alert user stating how much wood there is.

alert("You have "+woodTotal+ " pieces of wood");

//Print out total amount of wood to console

console.log(woodTotal+ "pieces of wood.");

//Alert user to ask if they can chuck the amount they think to the total amount of wood

alert("Can you chuck "+woodThink+" pieces of wood from "+woodTotal+" pieces of wood?");

//Printout what the user thinks they can chuck from the total amount of wood

console.log("Can you chuck "+woodThink+" pieces of wood from "+woodTotal+" pieces of wood?");

//Calculate total amount of wood subtracted from the amount user thinks they can chuck

var woodToChuck = woodTotal - woodThink;

//Print out total amount of wood subtracted from the user thinks they can chuck

console.log(woodToChuck);

//Alert user how much they will need to chuck

alert(name+ " you will need to chuck " +woodToChuck+" pieces of wood to chuck all of the pieces of wood.");

//Print out name and wood to chuck to console

console.log(name+ " you will need to chuck " +woodToChuck+" pieces of wood to chuck all of the pieces of wood.");