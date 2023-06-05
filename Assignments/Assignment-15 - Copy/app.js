// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function power(a, b) 
{
    return Math.pow(a, b);
}

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

function LeapYear(year) 
{
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) 
{
    return true;
} 
else 
{
    return false;
}
}

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function calculateTriangleArea(a, b, c) 
{
var s = (a + b + c) / 2;
var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
return area;
}

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

function calculateAverage(marks) 
{
    var total = marks.reduce(function(sum, mark)
    {
    return sum + mark;
    }
    , 0);
    return total / marks.length;
    }
    function calculatePercentage(marks) 
    {
    var total = marks.reduce(function(sum, mark) 
    {
    return sum + mark;
    }, 0);
    var percentage = (total / (marks.length * 100)) * 100;
    return percentage;
}
function mainFunction(marks) 
{
var average = calculateAverage(marks);
var percentage = calculatePercentage(marks);
console.log("Average: " + average);
console.log("Percentage: " + percentage + "%");
}

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

function myIndexOf(str, char) 
{
    for (var i = 0; i < str.length; i++) 
    {
    if (str.charAt(i) === char) 
    {
    return i;
    }
    }
    return -1;
}

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

function deleteVowels(sentence) 
{
    var vowels = ["a", "e", "i", "o", "u"];
    var result = "";
    for (var i = 0; i < sentence.length; i++) 
    {
    var char = sentence.charAt(i);
    if (vowels.indexOf(char.toLowerCase()) === -1) 
    {
    result += char;
    }
    }
    return result;
}

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

function countSuccessiveVowels(text) 
{
    var count = 0;
    var vowels = ["a", "e","i", "o", "u"];
    for (var i = 0; i < text.length - 1; i++) 
{
    var char1 = text.charAt(i).toLowerCase();
    var char2 = text.charAt(i + 1).toLowerCase();
    switch (char1) 
{
 case "a":
 case "e":
 case "i":
 case "o":
 case "u":
if (vowels.indexOf(char2) !== -1) 
{
count++;
}
break;
default:
break;
}
}
return count;
}

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

function convertToMeters(distance) 
{
    return distance * 1000;
}
    function convertToFeet(distance) 
    {
    return distance * 3280.84;
    }
    function convertToInches(distance) 
    {
    return distance * 39370.1;
    }
    function convertToCentimeters(distance) 
    {
    return distance * 100000;
    }
    function printDistanceConversions(distance) 
{
 console.log("Meters: " + convertToMeters(distance));
 console.log("Feet: " + convertToFeet(distance));
 console.log("Inches: " + convertToInches(distance));
 console.log("Centimeters: " + convertToCentimeters(distance));
}


// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

function calculateOvertimePay(hoursWorked) 
{
    var overtimePayRate = 12.00; 
    var overtimeHours = hoursWorked - 40;
    if (overtimeHours > 0) 
    {
    var overtimePay = overtimeHours * overtimePayRate;
    return overtimePay;
    } 
    else 
    {
    return 0;
    }
}

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

function notesCalculator(amount) 
{
    var hundredNotes = Math.floor(amount / 100);
    var fiftyNotes = Math.floor((amount % 100) / 50);
    var tenNotes = Math.floor(((amount % 100) % 50) / 10);
    return "You will have " + hundredNotes + " hundred notes, " + fiftyNotes + " fiftynotes, and " + tenNotes + " ten notes.";
}