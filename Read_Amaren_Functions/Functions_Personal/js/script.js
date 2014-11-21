/*
 Amaren Read
 WPF Sec 01
 Functions Personal
 11-20-14
 */

/*
 Amaren Read
 WPF Sec 01
 Functions Industry
 11-20-14
 */

//Name of user

var name = prompt("Hi! please type in your name?");

//re-prompt for name of user

while(name === ""){

 name = prompt("Will you please type in your name.")
}

//alert user letting them know what we are doing

alert("We are going to calculate how much money you have in your pocket " +name+ ".");

//Setup vars for calculation

//Prompt user asking how much money they took out of the bank

var withdrawBank = prompt("How much money did u take out of your bank " +name+ " ?");

//Re-prompt user if user input is not a number or user input is blank

while(isNaN(withdrawBank) || withdrawBank==="") {

 withdrawBank = prompt("Please type in how much you withdrew from your bank " + name + ".")

}

var paymentOrGave = prompt("Did you pay for anything or gave away any money, if so, how much " +name+ ".");

//Reprompt user if user input is not a number or user input is blank

while(isNaN(paymentOrGave) || paymentOrGave==="") {

 paymentOrGave = prompt("Type in how much you paid or gave away please " + name + ".")

}

//Call the function

var changePocket = pocketMoney(withdrawBank, paymentOrGave);

//Print how much user has in pocket

console.log(name+ ", you have " +changePocket+ " in your pocket.")

//Alert user how much money they have in their pocket

alert(name+ " you have " +changePocket+ " in your pocket.")

//Function to calculate how much user has in pocket

function pocketMoney(bank, payment){

//See how much the user has in pocket by subtracting withdraw from bank by if the user gave or paid on anything

 var extraChange = Number(bank - payment);

 //Returning var extraChange

 return extraChange;
}
