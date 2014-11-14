/*
 Amaren Read
 WPF Sec 01
 Conditionals Industry
 11-13-14
 */

// How many flowers.

//Types of flowers

var flowerPots = ["Rose", "Tulip", "Lily", "Daisy"];

//Name of user

var name = prompt("Hi, Welcome to the garden, what is your name?")

//re-prompt for name of user

if(name === ""){

 name = prompt("Could you please type in your name.")
}
//Yes response

var userAnsy = ("yes");

//No response

var userAnsn = ("no");

//Prompt user to see if they would like to know how many flower they have.

userAnsy = prompt("Would you like to know how many flowers you have? "+name);

//re-prompt user if they don't type anything

if(userAnsy === ""){

prompt("Please type a yes or no answer? " +name);

}
//prompt user for answer

if(userAnsy === "yes"){

//if user answers "yes" print to console and alert.

 console.log(flowerPots.length+ " How many flowers in the pots.");

 alert(name+ " , You have "  +flowerPots.length+ " flowers.");

 console.log(userAnsy+ " User answered yes.");

}

else if(userAnsn < userAnsy){

 console.log(userAnsy+ " User answered yes.");

}

else {

//Alert user to ask them how many flowers they have to water

 alert("Then how many flowers will you know to water? " +name);

}

if(userAnsn === "no"){

 alert(name+ " , You have a " + flowerPots + " types of flowers.");

}else {

 console.log(userAnsn+ " User answered no.");

}

//prompt user to ask which flower they would like to water first

var flowerFirst = prompt("Which flower would you like to water first? " +name);

//re-prompt if left blank

if(flowerFirst === ""){

 prompt("Please type which flower you would like to water first? " +name);

}

alert("Thanks " +name+ " for watering the flowers!")

console.log("Thanks " +name+ " for watering the flowers!")