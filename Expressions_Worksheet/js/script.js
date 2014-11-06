/*
 Amaren Read
 WPF Sec 01
 Expressions Worksheet
 11-4-14
 */

//Sparky's age in human years

var humanAge = 1;

//Sparky's age in dog years

var dogAge = 7;

//Sparky is 1 years old in human years and 7 years old in dog years

var age = humanAge * dogAge;

//Printout of how old Sparky is in dog years

console.log(age);


//Slice of pie I

//How many party goers

var partyGoers = 10;

//How many pizzas ordered

var pizzaOrder = 6;

//How many slices each pizza has

var slicePizza = 8;

//How many slices per pizza ordered

slices = slicePizza * pizzaOrder;

//How many slices party goers get

var partyGoers = slices/partyGoers;

//Printout of the number of slices each party goer gets to eat

console.log(partyGoers);


//Slice of pie II

//how many party goers

var partyGoers = 10;

//How many pizzas ordered

var pizzaOrder = 6;

//How many slices each pizza has

var slicePizza = 8;

//How many slices per pizza ordered

slices = slicePizza * pizzaOrder;

//Printout of the total number of pizza slices

//console.log(slices);

//How many slices party goers get

var partyGoers = slices/partyGoers;

//Remainder of left over pizza

var remainder = 0.8;

//How much pizza slices Sparky gets

var sparky = remainder * partyGoers;

//Printout of how many slices Sparky gets to eat

console.log(sparky);


//Average shopping bill

//Five week shopping array

var fiveWeek = [50, 60, 55, 65, 45];

//Total of money spent over the five weeks

var total = fiveWeek[0] + fiveWeek[1] + fiveWeek[2] + fiveWeek[3] + fiveWeek[4];

//Printout of the total amount

console.log(total);

//The average of money spent

var averageWeek = total / 5;

//Printout of the average

console.log(averageWeek);

//Discounts

//Disciption of item

var setItem = ("A headset with dual audio");

//Printout of item

console.log(setItem);

//Original price

var originalPrice = 20;

//Printout of original price

console.log(originalPrice)

//Discount percentage

var disPercent = 10;

//Sales tax

var salesTax = 1.5;

//Item without tax

var untxItem = originalPrice;

//Printout of item with out tax

console.log(untxItem);

//Item with tax

var taxedItem = salesTax;

//Printout of item with tax

console.log(taxedItem);

//Item, original price, with discount, without tax, with tax.

var total= originalPrice - disPercent + untxItem + taxedItem;

//Printout of item, original price, with discount, without tax, with tax.

console.log(total);
