// 1. Consider you have following code snippet:
// (Copy it in your HTML file)
// <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// <label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: Bank</p>
// <p class=”render”> Email : alexbank@example.com</p>
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>
// i. Get element of id “main-content” and assign them in a variable.

var mainContent = document.getElementById("main-content");

// ii. Display all child elements of “main-content” element.

var childElements = mainContent.children;
console.log(childElements);

// iii. Get all elements of class “render” and show their innerHTML
// in browser.

var renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) 
{
console.log(renderElements[i].innerHTML);
}

// iv. Fill input value whose element id first-name using javascript.

var firstNameInput = document.getElementById("first-name");
firstNameInput.value = "John";

// v. Repeat part iv for id ”last-name” and “email”.

var lastNameInput = document.getElementById("last-name");
var emailInput = document.getElementById("email");
lastNameInput.value = "Fang";
emailInput.value = "WangFang@example.com";



// 2. use HTML code of question 1 and show the result on browser.

// i. What is node type of element having id “form-content”.

var formContent = document.getElementById("form-content");
console.log(formContent.nodeType);

// ii. Show node type of element having id “lastName” and its child node.

var lastNameElement = document.getElementById("lastName");
console.log(lastNameElement.nodeType);
console.log(lastNameElement.childNodes[0].nodeType);

// iii. Update child node of element having id “lastName”.

lastNameElement.childNodes[0].nodeValue = "Last Name: WangLee";

// iv. Get First and last child of id “main-content”.

var firstChild = mainContent.firstChild;
var lastChild = mainContent.lastChild;
console.log(firstChild);
console.log(lastChild);

// v. Get next and previous siblings of id “lastName”.

var lastNameSiblingNext = lastNameElement.nextSibling;
var lastNameSiblingPrevious = lastNameElement.previousSibling;
console.log(lastNameSiblingNext);
console.log(lastNameSiblingPrevious);

// vi. Get parent node and node type of element having id “email”

var emailElement = document.getElementById("email");
var parentNode = emailElement.parentNode;
console.log(parentNode);
console.log(emailElement.nodeType);
