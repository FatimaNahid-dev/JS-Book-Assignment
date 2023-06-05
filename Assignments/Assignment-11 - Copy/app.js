// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var firstName = prompt("Enter your first name ... ");
var lastName = prompt("Enter your last name ...");
var fullName = firstName + " "+ lastName;
alert("Greetings ,Welcome to Our website , " + fullName + "!"); 

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

var favouritePhoneModel = prompt("Enter your faviourite mobile phone model name ...");
var lengthInput = favouritePhoneModel.length;
alert("The lenght of your input is:  " + lengthInput) ;

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var string = "Pakistani";
var Index = string.indexOf('n');
alert("Index of 'n' in the word 'Pakistani': " + Index);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var string1 = "Hello World";
var Index1 = string1.lastIndexOf('l');
alert(" Last  index of letter “l” in the word 'Hello World': " + Index1);


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var string2 = "Pakistani";
var character = string2.charAt(3);
alert("Character at 3rd index in the word 'Pakistani': " + character);

// 6. Repeat Q1 using string concat() method.

var firstName1 = prompt("Enter your first name:");
var lastName1 = prompt("Enter your last name:");
var fullName1 = firstName1.concat(" ", lastName1);
alert("Welcome, " + fullName1 + "!");

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var Astring = "Hyderabad";
var newAstr = Astring.replace("Hyder", "Islam");
document.write("After replacement: " + newAstr  + "<br>");


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

var message = "Ali and Sami are best friends. They play cricket and football together.";
var myMessage = message.replace( /and/g, "&");
document.write("After replacement: " + myMessage + "<br>");

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var stringInNumber = "472";
var num1 = Number(stringInNumber);
document.write("Value: " + num1 + "<br>");
document.write("Type: " + typeof num1 + "<br>");

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

var textInput = prompt("Enter text:");
var upperCtext = textInput.toUpperCase();
document.write("Uppercase: " + upperCtext + "<br>");

// 11. Write a program that takes user input. Convert and
// show the input in title case.

var textInput2 = prompt("Enter some text:");
var titleCtext = textInput2.toLowerCase().split(' ').map(word =>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
document.write("Title Case: " + titleCtext + "<br>");

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num35 = 35.36;
var num35String = num35.toString().replace('.', '');
document.write("Number: " + num35String + "<br>");

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

var username = prompt("Enter username:");
var isValid = /^[A-Za-z0-9]+$/.test(username);
if (isValid) 
{
document.write("Valid username: " + username + "<br>");
} else 
{
document.write("Invalid username. Please enter a valid username." + "<br>");
}


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

var F = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search:");
var lowerCuserInput = userInput.toLowerCase();
var found = false;
for (var i = 0; i < F.length; i++) 
{
if (F[i].toLowerCase() === lowerCuserInput) 
{
found = true;
break;
}
}
var index;
if(F === "cake" )
{
index = "1";
} 
else if(F === "apple pie")
{
    index = "2";
}
else if(F === "cookie")
{
    index = "3";
}
else if(F === "chips")
{
    index = "4";
}
else if(F === "patties")
{
    index = "5";
}
if (found) 
{
document.write("Item '" + userInput + "' found in the list at index " + index + "<br>");
} else 
{
document.write("Item '" + userInput + "' not found in the list."+"<br>");
}

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

var passWord = prompt("Enter a password:");
var Validity = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(passWord);
if (Validity) 
{
document.write("Valid password: " + passWord + "<br>");
} else 
{
document.write("Invalid password. Please enter a valid password." + "<br>");
}

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = "University of Karachi";
var array = university.split(' ');
document.write("Array elements: " + array + "<br>");

// 17. Write a program to display the last character of a user
// input.

var newTextInput = prompt("Enter some text:");
var lastCharacter = newTextInput.charAt(newTextInput.length - 1);
document.write("Last character: " + lastCharacter +"<br>");

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var sentence = "The quick brown fox jumps over the lazy dog";
var wordToSearch = "the";
var regEx = new RegExp("\\b" + wordToSearch + "\\b", "gi");
var total = (sentence.match(regEx) || []).length;
document.write("Occurrences of the word 'the': " + total);