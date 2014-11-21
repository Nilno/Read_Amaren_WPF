/*
 Amaren Read
 WPF Sec 01
 Functions Worksheet
 11-20-14
 */

//Area of rectangle

//Name of user

var name = prompt("Hello, what is your name?");

//re-prompt for name of user

while(name === ""){

    name = prompt("Could you please type in your name.")
}

//alert user letting them know what we are doing

alert("We are going to try to figure out what the area of a rectangle is " +name+ ".");

//Setup vars for calculation

//prompt user for width of rectangle

var widRec = prompt("What is the width of the rectangle " +name+ " ?");

//Re-prompt user if left blank

while(isNaN(widRec) || widRec==="");

        widRec = prompt("What is the width of the rectangle " +name+ " please?")

//Prompt user for height of rectangle

var heiRec = prompt("What is the height of the rectangle " +name+ "?");

//re-prompt if left blank

while(isNaN(heiRec) || heiRec==="");

height = prompt("What is the height of the rectangle " +name+ " please?")

//call function

var area = calArea(widRec, heiRec);

console.log("The Rectangle area is " + area);

//function for area

function calArea(wid, hei ){

//Return the function
    var total = Math.round(wid * hei);

    return total;
}
