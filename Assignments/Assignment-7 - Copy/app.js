// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var cityName = prompt("Enter city name:");

if (cityName.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights!");
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender:");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir!");
}
else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am!");
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

var signalColor = prompt("Enter the color of the traffic signal:");

if (signalColor.toLowerCase() === "red") {
    alert("Must Stop");
}
else if (signalColor.toLowerCase() === "yellow") {
    alert("Ready to move");
}
else if (signalColor.toLowerCase() === "green")
{
    alert("Move now");
}

// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

var remainingFuel = Number(prompt("Enter the remaining fuel in liters:  1 , 1.25,... "));
if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

var b = 82;
if (b++ === 83)
{
   alert("given condition for variable b is true");
}

// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

var c = 12;
if (c++ === 13)
{
    alert("condition 1 is true");
    }
    if (c === 13)
    {
    alert("condition 2 is true");
    }
    if (++c < 14)
    {
    alert("condition 3 is true");
    }
    if(c === 14)
    {
    alert("condition 4 is true");
    }

// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost)
{
alert("The cost equals");
}

// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");}

if (true)
{
 alert("True");
}
if (false)
{
 alert("False");
}
    

// }f. if("car" < "cat"){
//alert("car is smaller than cat");}

if("car" < "cat"){
alert("car is smaller than cat");}
 
// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

var subject1 = Number(prompt("Enter marks obtained in subject 1:"));
var subject2 = Number(prompt("Enter marks obtained in subject 2:"));
var subject3 = Number(prompt("Enter marks obtained in subject 3:"));
var totalMarks = Number(prompt("Enter total marks for 3 subjects:"));
var obtainedMarks = subject1 + subject2 + subject3;
var percentage = (obtainedMarks / totalMarks) * 100;
var grade;
var remarks;
if (percentage >= 80) {
grade = "A+";
remarks = "Excellent";}
else if (percentage >= 70) 
{
grade = "A";
remarks = "Good";
} 
else if (percentage >= 60) 
{
grade = "B";
remarks = "You need to improve";
} 
else if (percentage < 60)
{
grade = "Fail";
remarks = "Sorry";
}
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNumber = 9;
var userGuess = Number(prompt("Guess the secret number (ranging from 1 to 10):"));
if (userGuess === secretNumber) 
{
alert("Bingo! Correct answer.");
} 
else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) 
{
alert("Close enough to the correct answer.");
} 
else
{
alert("Incorrect guess.");
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var number = Number(prompt("Enter a number to check whether number can be divede by 3:"));
if (number % 3 === 0) 
{
alert("The number is divisible by 3.");
} 
else 
{
alert("The number is not divisible by 3.");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var num = Number(prompt("Enter a number to check number is even or odd:"));
if (num % 2 === 0) 
{
alert("The number is even.");
} 
else 
{
alert("The number is odd.");
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp_get = prompt("Enter temperature please...")
if (temp_get >= 40)
{
    alert("It is too hot outside.")
}
else if (temp_get>=30)
{
    alert("The Weather today is Normal.")
}
else if (temp_get>=20)
{
    alert("Today’s Weather is cool.")
}
else if(temp_get>10)
{
    alert("“OMG! Today’s weather is so Cool.”")
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


var a = Number(prompt("Enter the first number please for calculation..."));
var b = Number(prompt("Enter the seconed number please for calculation..."));
var operater =  prompt("Enter operater please for calculation ..., + , - , * , / ");
var c;

if (operater === "+")
{
    c = a + b ; 
}
if (operater === "-")
{
    c = a - b ; 
}
if (operater === "*")
{
    c = a * b ; 
}
if (operater === "/")
{
    c = a / b ; 
}
alert("The result of the calculation is : " + c);