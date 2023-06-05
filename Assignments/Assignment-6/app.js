// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var num = Number(prompt("Enter a number:"));
document.write("Result: <br>");
document.write("The value of a is: " + num + "<br>");
document.write("............................................... <br>" + "<br>");
document.write("The value of ++a is: " + (++num) + "<br>");
document.write("Now the value of a is: " + num + "<br>" + "<br>");
document.write("The value of a++ is: " + (num++) + "<br>");
document.write("Now the value of a is: " + num + "<br>" + "<br>");
document.write("The value of --a is: " + (--num) + "<br>");
document.write("Now the value of a is: " + num + "<br>" + "<br>");
document.write("The value of a-- is: " + (num--) + "<br>");
document.write("Now the value of a is: " + num + "<br>" + "<br>");

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = "2", b = "1";
var result = --a - --b + ++b + b--;

// --a; greaterthan and equal to a is decremented to 1
// --a - --b; greaterthan and equal a is decremented to 1, b is decremented to 0, and the result is 1 - 0 = 1
// --a - --b + ++b;  greaterthan  a is decremented to 1, b is incremented to 1, and the result is 1 - 1 + 1 = 1
// --a - --b + ++b + b--;  greaterthan  a is decremented to 1, b is decremented to 0 due to postdecrement,and the result is 1 - 0 + 1 + 1 = 3
// After the execution:
// a = 1
// b = 0
// result = 3
1
document.write("<h1>The output in variables a, b & result after execution of the following script</h1>" + "<br>" + "<br>" + "<br>")
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result + "<br>");

// 3. Write a program that takes input a name from user &
// greet the user.

var getName = prompt("Enter your name")

alert("Hey " + getName + "! Welcome to my website.");

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var userInput = prompt("Enter a number:");
var num_r;

if(userInput === ""){
    num_r = 5;
}
else{
    num_r = Number(userInput);
}
document.write("<h2>Multiplication Table of "+ num_r +"</h2>" + "<br>");

for (var i = 1; i <= 10; i++){
    document.write(num_r + " x " + i + " = " + (num_r * i) + "<br>");
}

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var subject1 = prompt("Enter Name of subject 1:");
var subject2 = prompt("Enter Name of subject 2:");
var subject3 = prompt("Enter Name of subject 3:");
var totalMarks = 100;

var obtainedMarks1 = Number(prompt("Enter obtained marks for subject 1:"));
var obtainedMarks2 = Number(prompt("Enter obtained marks for subject 2:"));
var obtainedMarks3 = Number(prompt("Enter obtained marks for subject 3:"));
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;

var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

var subjectPercent1 = ( obtainedMarks1 / 100 ) * 100;
var subjectPercent2 = ( obtainedMarks2 / 100 ) * 100;
var subjectPercent3 = ( obtainedMarks3 / 100 ) * 100;

document.write("<h2>Marks Sheet</h2>");
document.write("<table>");
document.write("<tr><th>Subject     </th><th>                        Total Marks         </th><th>          ObtainedMarks          </th><th>      Percentage  </th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 +"</td><td>" + subjectPercent1  + "%" +"</td></tr>"  );
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" +obtainedMarks2 + "</td><td>" + subjectPercent2  + "%"+"</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" +obtainedMarks3 + "</td><td>" + subjectPercent3  + "%" +"</td></tr>");
document.write("<tr><td>" + "          " + "</td><td><h4>" + totalObtainedMarks + "</h4></td><td><h4>" +  (totalMarks * 3) + "</h4></td><td><h4>" + percentage + "%" + "</h4></td></tr>");
document.write("</table>");
document.write("<br>");

