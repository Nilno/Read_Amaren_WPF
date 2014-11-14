/*
 Amaren Read
 WPF Sec 01
 Conditionals Industry
 11-13-14
 */

//Group 1 Last Chance for Gas!

var gasEffici = 30;

//Gas efficiency in mpg

    console.log(gasEffici+ " mpg")

var gaugeRead = 20;

//Gauge reading in percent

    console.log(gaugeRead+ "%")

var tankCap = 55;

//Tank capacity in gallons

console.log(tankCap+ " gal.")

//If tank capacity is less then gas efficiency and gauge reading then stop for gas

if(tankCap < gasEffici && gaugeRead){

    console.log("You only have X gallons of gas in your tank, better get gas now while you can!”");


}else if(tankCap > gasEffici && gaugeRead){

    console.log(gaugeRead+ "%")

}else{

    console.log("Yes, you can make it without stopping for gas!")
}

//Group 2 Grade letter calculator

var grade = ["100", "94", "89", "84", "79", "75", "72", "0"]

grade = "84";

//Prompt user for name

var name = prompt("Hello, what is your name?");

//re-prompt for name of user

if(name === ""){

    name = prompt("Could you please type in your name.");
}

//Prompt user for grade

var userGrade = prompt("what is your grade " +name+ "?");

//re-prompt user for their grade if they leave their grade blank

if(userGrade === "")

    userGrade = prompt ("Please type in your grade.");

(userGrade > grade) ? console.log("You have a passing grade!") : console.log("You don't have a passing grade!")

//Group 3 Movie ticket price

var movieTime = 7;

var userAge = 50;

