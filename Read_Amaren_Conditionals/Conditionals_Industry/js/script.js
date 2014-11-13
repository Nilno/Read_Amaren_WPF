/*
 Amaren Read
 WPF Sec 01
 Conditionals Industry
 11-13-14
 */

// How many flowers.

var flowerPots = ["Rose", "Tulip", "Lily", "Daisy"];

var userAnsy = ("yes");

var userAnsn = ("no");

//Prompt user to see if they would like to know how many flower they have.

userAnsy = prompt("Would you like to know how many flowers you have?");

//re-prompt user if they don't type anything

if(userAnsy === ""){

prompt("Please type a yes or no answer?");

}
//prompt user for answer

if(userAnsy === "yes"){

//if user answers "yes" print to console and alert.

 console.log(flowerPots.length);

 alert("You have "  +flowerPots.length+ " flowers.");

}

else if(userAnsn < userAnsy){

 console.log(userAnsy);

}

else {

//Alert user to ask them how many flowers they have to water
 alert("Then how many flowers will you know to water?");

}

if(userAnsn === "no"){

 alert("You have " +flowerPots+ " types of flowers.");


}