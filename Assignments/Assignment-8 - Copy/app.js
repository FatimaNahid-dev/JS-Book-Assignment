// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var input = prompt("Enter a character (number or string) :  ");
var charCode = input.charCodeAt(0);
if (charCode >= 48 && charCode <= 57) {
    alert("It is a number.");
}
else if (charCode >= 97 && charCode <= 122) {
    alert("It is a lowercase letter.");
}
else if (charCode >= 65 && charCode <= 90) {
    alert("It is an uppercase letter.");
}


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var a = Number(prompt("Enter the first integer:"));
var b = Number(prompt("Enter the second integer:"));
if (a === b) {
    alert("Integers are equal.");
}
else if (a > b) {
    alert("The first one is greaterthan seconed one");
}
else if (a < b) {
    alert("The first one is lessthan seconed one");
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var number = Number(prompt("Enter the number to check whether the number is positive, negative or zero. :"));
if (number === 0) {
    alert("The number is zero.");
}
else if (number > 0) {
    alert("The number is positive.");
}
else if (number < 0) {
    alert("The number is negative ");
}


// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

var char = prompt("Enter the character to check wether input is vowel or not : (i.e. string of length 1)");
if (char === "a") {
    alert("True");
}
if (char === "e")
{
    alert("True");
}
else if (char === "i")
{
    alert("True,It's a vowel");
}
else if (char === "o")
{
    alert("True");
}
else if (char === "u") 
{
    alert("True");
}
else
{
alert("False,It's not a vowel");
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var passWord = "(echinoderms^M)09@";
var getPassward = prompt("Enter your password please...");
if(getPassward === "")
{
    alert("Please enter password to proceed");
}
else if (passWord === getPassward)
{
    alert("congratulations! You enter correct password.");
}
else if (passWord !== getPassward)
{
    alert("Sorry,you enter wrong password.");
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) 
{
greeting = "Good day";
}
else
{
greeting = "Good evening";
}
alert(greeting);

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var getTime = Number(prompt("Enter time in 24 hours clock format ...."));

if (getTime >= 0000 && getTime <= 1200)
 {
alert("Time is " + getTime + " hours. Good morning!");
}
else if (getTime >= 1200 && getTime <= 1700) 
    {
alert("Time is " + getTime + " hours. Good afternoon!");
} 
else if (getTime >= 1700 && getTime <= 2100) 
{
alert("Time is " + getTime + " hours. Good evening!");
} 
else if(getTime >= 2100 && getTime <= 2359)
{
alert("Time is" + getTime + " hours. Good night!");
}
