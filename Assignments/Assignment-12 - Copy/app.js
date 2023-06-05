// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var positiveInput = Number(prompt("Enter a positive integer..."));
document.write("Number: " + positiveInput + "<br>");
document.write("Round off value: " + Math.round(positiveInput) + "<br>");
document.write("Floor value: " + Math.floor(positiveInput) + "<br>");
document.write("Ceil value: " + Math.ceil(positiveInput) + "<br>");

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var negativeInput = Number(prompt("Enter a negative integer..."));
document.write("Number: " + negativeInput + "<br>");
document.write("Round off value: " + Math.round(negativeInput) + "<br>");
document.write("Floor value: " + Math.floor(negativeInput) + "<br>");
document.write("Ceil value: " + Math.ceil(negativeInput) + "<br>");


// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var num45 = Number(prompt("Enter a number:"));
var absoluteValue = Math.abs(num45);
document.write("The absolute value of " + num45 + " is " + absoluteValue + " <br>");

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("The value of the dice roll is: " + diceValue + " <br>");

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var coinValue = Math.floor(Math.random() * 2);
if (coinValue === 0) 
{
document.write("The coin shows: Heads" + " <br>");
} else 
{
document.write("The coin shows: Tails" + " <br>");
}

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + randomNumber + " <br>");

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var weightInput = prompt("Enter your weight:");
var weight = parseFloat(weightInput);
document.write("Your weight is: " + weight + " kilograms" + " <br>");

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
if (userGuess === secretNumber) 
{
document.write("Congratulations! You guessed the secret number." + " <br>");
} 
else 
{
document.write("Sorry, your guess is incorrect. The secret number was: " +secretNumber + " <br>");
}
