// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));
var sum = num1 + num2;
document.write("The sum of " + num1 + " and " + num2 + " is " + sum + "<br>" + "<br>");

//2. Repeat task1 for subtraction, multiplication, division & modulus.

var num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));

var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;
document.write("The Subtraction of: " + num1 + " - " + num2 + " = " + subtraction + "<br>");
document.write("The Multiplication of: " + num1 + " * " + num2 + " = " + multiplication +"<br>");
document.write("The Division of: " + num1 + " / " + num2 + " = " + division + "<br>");
document.write("The Modulus of: " + num1 + " % " + num2 + " = " + modulus + "<br>" + "<br>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// a. Declare a variable.after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

var num; 

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.

document.write("Value after variable declaration is " + num + "<br>");

// c. Initialize the variable with some number.

num = 5;
// d. Show the value of variable in your browser like “Initial value: 5”.

document.write("Initial value: " + num + "<br>");


// e. Increment the variable.

num++; 

// f. Show the value of variable in your browser like “Value after increment is: 6”.

document.write("Value after increment is: " + num + "<br>");

// g. Add 7 to the variable.

num += 7;

// h. Show the value of variable in your browser like “Value after addition is: 13”.

document.write("Value after addition is: " + num + "<br>");

// i. Decrement the variable.

num--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.

document.write("Value after decrement is: " + num + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.

var remainder = num % 3;

// l. Output : “The remainder is : 0”.

document.write("The remainder is: " + remainder + "<br>" + "<br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a 
//variable & calculate the cost of buying 
//5 tickets
// to a movie.

var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
document.write("Total cost of buying " + numberOfTickets + " movie tickets is " + totalCost + " PKR." + "<br>" + "<br>");

//5. Write a script to display multiplication table of anynumber in your browser.

var number = Number(prompt("Enter a number for Table"));
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) 
{
document.write(number + " x " + i + " = " + (number * i) + "<br>" + "<br>");
}

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.

// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:
//C=(F-32)*5/9
//F=(C*9/5)+32

// a. Store a Celsius temperature into a variable.

var celsiusTemperature = 25;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.

var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
document.write("<h1>Temperature Converter</h1>" + "<br>");
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");

// c. Now store a Fahrenheit temperature into a variable.

var fahrenheitTemperature = 70;

// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsiusTemperature = (fahrenheitTemperature - 32) * 5/9;
document.write(fahrenheitTemperature + "°F is " + celsiusTemperature + "°C");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var PriceOfItem1 = 650;
var PriceOfItem2 = 100;
var OrderedQuantityOfItem1 = 3;
var OrderedQuantityOfItem2 = 7;
var shipping_charges = 100;

var totalCost = (PriceOfItem1 * OrderedQuantityOfItem1) + (PriceOfItem2 *
    OrderedQuantityOfItem2 ) + shipping_charges;

document.write("<h1>Shopping Cart</h1>");

document.write("Price of item 1 is " + PriceOfItem1 + " <br>");

document.write("Quantity of item 1 is " + OrderedQuantityOfItem1 + "<br>");

document.write("Price of item 2 is " + PriceOfItem2 + " <br>");

document.write("Quantity of item 2 is " + OrderedQuantityOfItem2 + "<br>");

document.write("Shipping Charges " + shipping_charges + "<br><br>");


document.write("Total Cost of your order is " + totalCost );

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var marks = 980;
var marksObtained = 804;

var percentage = (marksObtained/marks)*100;

document.write("<h1>Marks Sheet</h1>" + "<br>");
document.write("Total Marks: " + marks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write("<h1>Currency in PKR</h1>" + "<br>");

var us_dollars = 10;
var saudiRiyal = 25;

var exchangeRates_usDollars = 104.80;
var exchangeRates_saudiRiyal = 28;

var amountIn_rupee = (us_dollars * exchangeRates_usDollars) + (saudiRiyal * exchangeRates_saudiRiyal);
document.write("Total Currency in PKR:" + amountIn_rupee + "<br>");

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
document.write("<h1>Math Calculation</h1>" + "<br>");
var num = 6;
r_value = ((num + 5) * 10) / 2;
document.write("Value after Calculation is " + r_value + "<br>");

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.

document.write("<h1>Age Calculator</h1>" + "<br>");

var currentYear = new Date().getFullYear();
var birthYear = 1992;
var possibleAge1 = currentYear - birthYear;
var possibleAge2 = possibleAge1 - 1;

document.write("Current Year : " + currentYear + "<br>")
document.write("Birth Year : " + birthYear + "<br>")
document.write("They are either " + possibleAge1 + " or " + possibleAge2 + " years old." + "<br>");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write("<h1>The Geometrizer</h1>" + "<br>");

var radius = 20;

var circumFerence = (2*Math.PI*radius);
var areaOfCircle = (Math.PI*(radius*radius));

document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumFerence.toFixed(2) + "<br>");
document.write("The area is: " + areaOfCircle.toFixed(2) + "<br>" );

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

document.write("<h1>The Lifetime Supply Calculator</h1>" + "</br>");

var favoriteSnack = "Fries" ;
var currentAge = 16; 
var maximumAge = 40;
var perDayConsumption = 3; 
var yearsRemaining = maximumAge - currentAge;
var totalConsumptionOfLife  = yearsRemaining * 365 * perDayConsumption ;

var yearsRemaining = maximumAge - currentAge;
document.write("Favourite Snacks:"+ favoriteSnack + "</br>");
document.write("Current age:"+ currentAge + "</br>");
document.write("Estimated Maximum Age:"+ maximumAge + "</br>");
document.write("Amounts of snacks per day:"+ perDayConsumption + "</br>");
document.write("You will need " + totalConsumptionOfLife +" " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + "." );


