// 1. Write a function that displays current date & time in your
// browser.

function displayCurrentDateTime() 
{
    var currentDate = new Date();
    var dateTimeString = currentDate.toLocaleString();
    document.write(dateTimeString + "<br>");
}

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

function greetUser(firstName, lastName) 
{
    var fullName = firstName + " " + lastName;
    document.write("Welcome, " + fullName + "!" + "<br>");
}

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

var num1 = prompt("Enter a number for sum:");
var num2 = prompt("Enter another number for sum:");
function add2Numbers(num1, num2) {
    var sum = num1 + num2;
    document.write("The sum is: " + sum + "<br>");
    return sum;

    }
    
// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function calculator(numA, numB, operator) 
{
    var result;
    switch (operator) {
    case "+":
    result = numA + numB;
    break;
    case "-":
    result = numA - numB;
    break;
    case "*":
    result = numA * numB;
    break;
    case "/":
    result = numA / numB;
    break;
    default:
    result = "Invalid operator";
    }
    document.write("The result is: " + result + "<br>");
}

// 5. Write a function that squares its argument.

function squareNumber(num) {
    var square = num * num;
    return square;
    }

// 6. Write a function that computes factorial of a number.

function factorial(number) 
{
var fact = 1;
for (var i = 1; i <= number; i++) 
{
    fact *= i;
}
    return fact;
}
    
// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

function countNumbers(start, end) 
{
    for (var i = start; i <= end; i++) 
    {
    document.write(i + "<br>");
    }
}

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calculateHypotenuse(base, perpendicular) 
{
    function calculateSquare(num) 
    {
    return num * num;
    }
    var hypotenuseSquared = calculateSquare(base) + calculateSquare(perpendicular);
    var hypotenuse = Math.sqrt(hypotenuseSquared);
    return hypotenuse;
}

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


function calculateRectangleArea(width, height)
{
    var area = width * height;
    return area;
}

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function isPalindrome(str) 
{
    var reverseStr = str.split("").reverse().join("");
    return str === reverseStr;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("helloo"));

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function convertFirstLetterToUppercase(str) 
{
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
    var firstLetter = words[i].charAt(0).toUpperCase();
    words[i] = firstLetter + words[i].slice(1);
    }
    return words.join(" ");
}


// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function findLongestWord(str) 
{
    var words = str.split(" ");
    var longestWord = "";
    for (var i = 0; i < words.length; i++) 
    {
    if (words[i].length > longestWord.length) 
    {
    longestWord = words[i];
    }
    }
    return longestWord;
    }

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function countOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) 
    {
    if (str.charAt(i) === letter) 
    {
    count++;
    }
    }
    return count;
    }

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference(radius) 
{
    var circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference + "<br>");
}
    function calcArea(radius) 
{
    var area = Math.PI * radius * radius;
    document.write("The area is " + area + "<br>");
}