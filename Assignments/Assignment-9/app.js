// 1. Declare an empty array using JS literal notation to store
// student names in future.

var student_names = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

var student_names = (" ");

// 3. Declare and initialize a strings array.

var newArr = ["Book","Copy","Pen","Pencil"];

// 4. Declare and initialize a numbers array.

var num = [11, 21, 31];

// 5. Declare and initialize a boolean array.

var boolArr = [true,false];

// 6. Declare and initialize a mixed array.

var arr = ["Happy", 2023, false]

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("Qualifications <br>" );
for (var i = 0; i < qualifications.length; i++) 
{
document.write((i + 1) + ") " + qualifications[i] + "<br>");
}

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var student_names = [ "Fatima", "Amina", "Soha"]
var student_marks = [465, 489, 487] 

for (var i = 0; i < student_names.length; i++) 
{
var stPercent = (student_marks[i] / 500) * 100;
document.write("Marks of " + student_names[i] + ": " + student_marks[i] + ". Percentage: " + stPercent + "%<br>");
}

// 9. Initialize an array with color names. Display the array
// elements in your browser.
var myColors = [ "violent", "blue", "green", "indigo", "yellow", "red", "orange" + "<br>"]
document.write(myColors);

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
var getColor = prompt("Enter a color to add in beginning ...");
myColors.unshift(getColor);

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
var getColor = prompt("Enter a color to add at end...");
myColors.push(getColor);

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
myColors.unshift("cyan","silver");

// d. Delete the first color in the array. Display the updated
// array in your browser.
myColors.shift();

// e. Delete the last color in the array. Display the updated
// array in your browser.
myColors.pop();

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
var addIndexColor = Number(prompt("Enter the number of index to add color....(0,1,2,...)"));
getColor = prompt("Enter color...");
myColors.splice(addIndexColor, 0, getColor);

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var deleteIndex = Number(prompt("Enter number to delete color..."));
var numDelete= Number(prompt("Enter number of color to delete..."));
myColors.splice( deleteIndex, numDelete);

for (var i = 0; i < myColors.length; i++) 
{
    document.write(myColors[i] +"<br>" );
}

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var  stScores = [ 87, 78, 98, 67, 89];
stScores.sort(function(f,l) 
{return f - l;});
document.write("Sorted scores of student are " + stScores.join(", ") +"<br>");

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var cities = ["Konia", "London", "Huostan", "Istanbul", "Shahngai"];
var selectedCities = cities.slice(1, 4);
document.write("Selected cities: " + selectedCities.join(", ") + "<br>");

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = [ "This", " is " , " my ", " cat" + "<br>"];
var string = arr.join(" ");
document.write("Array:" + arr)
document.write("String:" + string);

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var array = [];
array.push("Apple");
array.push("Book");
array.push("Cat");
document.write("First element is " + array.shift() + "<br>");
document.write("Second element is " + array.shift() + "<br>");
document.write("Third element is " + array.shift() + "<br>");

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

var _array = [];
_array.push("paper");
_array.push("pen");
_array.push("ink");
document.write("Last element is " + _array.pop() + "<br>");
document.write("Second last element is " + _array.pop() + "<br>");
document.write("Third last element is " + _array.pop() + "<br>");


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:


var mobilePhones = ["Vivo", "Samsung", "Motorola", "Nokia", "Oppo", "RealmeS"];
document.write("<select>");
for (var i = 0; i < mobilePhones.length; i++) {
document.write("<option>" + mobilePhones[i] + "</option>");
}
document.write("</select>");
