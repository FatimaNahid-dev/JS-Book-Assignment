// 1. Write a program that displays current date and time in
// your browser.

var currentTime = new Date();
document.write("Current date and time: " + currentTime);

// 2. Write a program that alerts the current month in words.
// For example December.

var data = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];
var currentMonth = new Date().getMonth();
alert("Current month: " + data[currentMonth]);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDay = new Date().getDay();
alert("Current day: " + day[currentDay]);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.December

var currentDay = new Date().getDay();
if (currentDay === 0 || currentDay === 6) 
{
alert("It's Fun day");
}
else 
{
alert("It's not Fun day");
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

var currentDate = new Date().getDate();
if (currentDate < 16) 
{
alert("First fifteen days of the month");
} 
else 
{
alert("Last days of the month");
}

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var minutesMnight = Date.now() / (1000 * 60);
alert("Minutes since midnight, Jan. 1, 1970: " + minutesMnight);


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var currentHour = new Date().getHours();
if (currentHour < 12) 
{
    alert("It's AM");
} 
else 
{
    alert("It's PM");
}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var lastDay = new Date(2020, 11, 31);
alert("Later date: " + lastDay);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
var startingDate = new Date(2023, 6, 24); 
var currentDate = new Date();
var timeDifference = currentDate.getTime() - startingDate.getTime();
var daysSinceRamadan = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
alert("Number of days since 1st Ramadan: " + daysSinceRamadan);

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var referenceDate = new Date("Jan 01, 2015");
var timeDifference = referenceDate.getTime() - Date.now();
var secondsElapsed = Math.abs(Math.floor(timeDifference / 1000));
alert("Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsed);

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

var currentDate = new Date();
var currentHour = currentDate.getHours();
currentDate.setHours(currentHour + 1);
alert("Date object after resetting it one hour ahead: " + currentDate);


// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert("Date 100 years back: " + currentDate);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var age = prompt("Enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
alert("Your birth year is: " + birthYear);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var customerName = "Fatima Nahid";
var currentMonth = "June";
var numberOfUnits = 400;
var chargesPerUnit = 38;
var netAmountPayable = numberOfUnits * chargesPerUnit;
var latePaymentSurcharge = 650;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
document.write("<h1>K-Electric Bill</h1>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + currentMonth + "<br>");
document.write("Number of Units: " + numberOfUnits + "<br>");
document.write("Charges per Unit: " + chargesPerUnit + "<br>");
document.write("Net Amount Payable (within Due Date): " +
netAmountPayable.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): " +
grossAmountPayable.toFixed(2) + "<br>");
