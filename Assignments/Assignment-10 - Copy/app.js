// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var arrayForMulti_dimension = [];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var Matrix1 = [1 , 2 , 3 ];

var Matrix2 = [4,  5 , 6 ] 

var Matrix3 = [7,  8,  9 ]
;
document.write(Matrix1 + "<br>" + Matrix2 + "<br>" + Matrix3 + "<br>");
// 3. Write a program to print numeric counting from 1 to 10.

 for (var i = 1; i <= 10; i++) 
 {
 document.write(i + "," + "<br>");
 }


// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var num = Number(prompt("Enter the table number:"));
var length = Number(prompt("Enter the table length:"));

for (var i = 1; i <= length; i++) 
{
document.write(num + " x " + i + " = " + (num * i) + "<br>");
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) 
{
document.write(fruits[i] + "<br>");
}

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("Counting: ");
for (var i = 1; i <= 15; i++) 
{
document.write(i + ", ");
}

document.write("<br>Reverse counting: ");
for (var i = 10; i >= 1; i--) 
{
document.write(i + ", ");
}


document.write("<br>Even: ");
for (var i = 0; i <= 20; i += 2) 
{
document.write(i + ", ");
}
document.write("<br>Odd: ");
for(var i = 1; i <= 19; i += 2) 
{
document.write(i + ", ");
}
document.write("<br>Series: ");
for (var i = 2; i <= 20; i += 2) 
{
document.write(i + "k, " );
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var item = prompt("Welcome to ABC bakery , What do you want sir /ma'am?");
var found = false;
for (var i = 0; i < A.length; i++) 
{
if (A[i] === item) {
found = true;
break;
}
}
var index;
if(item === "cake" )
{
index = "1";
} 
else if(item === "apple pie")
{
    index = "2";
}
else if(item === "cookie")
{
    index = "3";
}
else if(item === "chips")
{
    index = "4";
}
else if(item === "patties")
{
    index = "5";
}
if (found) 
{
alert("Item '" + item + "' found in the list  at index  " + index );
} 
else 
{
alert("Item '" + item + "' not found in the list." );
}


// 8. Write a program to identify the largest number in the
// given array. A = [24, 53, 78, 91, 12].

var A = [24, 53, 78, 91, 12];
var largestNumber = A[0];

for (var i = 1; i < A.length; i++) 
{
if (A[i] > largestNumber) 
{
largestNumber = A[i];
}
}
document.write( "<br>" +"Array items: " + A + "<br>")
document.write("The largest number is " + largestNumber + "<br>");

// 9. Write a program to identify the smallest number in the
// given array. A = [24, 53, 78, 91, 12]

var B = [24, 53, 78, 91, 12];
var smallestNumber = B[0];
for (var i = 1; i < B.length; i++) 
{
if (B[i] < smallestNumber) 
{
    smallestNumber = B[i];
}
}
document.write("Array items: " + B + "<br>")
document.write("The smallest number is : " + smallestNumber + "<br>");

// 10. Write a program to print multiples of 5 ranging 1 to 100.

document.write("Multiples of 5: ");
for (var i = 1; i <= 100; i++) 
{
if (i % 5 === 0) 
{
document.write(i + ", ");
}
}