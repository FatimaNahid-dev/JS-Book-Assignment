// 1. Show an alert box on click on a link.

var tn = document.getElementById("div");

if (tn) {
  var createdElement = document.createElement("a");
  createdElement.innerText = "Click me!";
  createdElement.href = "https://bitly.com";
  createdElement.addEventListener("click", showAlert);

  tn.appendChild(createdElement);
} 
else 
{
  console.error("Div element not found.");
}

function showAlert() 
{
  alert("You clicked the link!");
}

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

var img1 = document.createElement("img");
img1.src = "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
img1.height = 400;
img1.width = 400;
img1.addEventListener("click", function() 
{
  showAlert("Thanks to Purchase a Mobile (1) from us!");
});

var img2 = document.createElement("img");
img2.src = "https://images.pexels.com/photos/171947/pexels-photo-171947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
img2.height = 400;
img2.width = 500;
img2.addEventListener("click", function() 
{
  showAlert("Thanks to Purchase a Mobile (2) from us!");
});

var img3 = document.createElement("img");
img3.src = "https://images.pexels.com/photos/257923/pexels-photo-257923.jpeg?cs=srgb&dl=pexels-pixabay-257923.jpg&fm=jpg&_gl=1*njxwk8*_ga*MTI5ODMyODkzNy4xNjg1OTY3MjQz*_ga_8JE65Q40S6*MTY4NTk2NzI0Ny4xLjEuMTY4NTk2Nzc0MC4wLjAuMA..";
img3.height = 400;
img3.width = 400;
img3.addEventListener("click", function() 
{
  showAlert("Thanks to Purchase a Mobile (2) from us!");
});

document.body.appendChild(img1);
document.body.appendChild(img2);
document.body.appendChild(img3);

function showAlert(message) 
{
  alert(message);
}


// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.
// Before delete
// After click on delete button on “Mark ” row

var table = document.createElement("table");
table.id = "studentTable";


var thead = document.createElement("thead");
var headerRow = document.createElement("tr");

var headerNames = ["Name", "Age", "Grade", "Actions"];
headerNames.forEach(name => {
  var headerCell = document.createElement("th");
  headerCell.textContent = name;
  headerRow.appendChild(headerCell);
});

thead.appendChild(headerRow);

var tbody = document.createElement("tbody");

var students = [
  { name: "John", age: 20, grade: "A" },
  { name: "Mark", age: 22, grade: "B" },
  { name: "Max", age: 19, grade: "A+" },
  { name: "Adrian", age: 18, grade: "A" },
  { name: "Tim", age: 23, grade: "B" },
  { name: "Bunny", age: 21, grade: "B" },
  { name: "Min", age: 20, grade: "A" },
  { name: "Shwan", age: 23, grade: "A" },
  { name: "Alex", age: 21, grade: "B" },
  { name: "Farraday", age: 24, grade: "A" }
];

students.forEach(student => {
  var row = document.createElement("tr");

  Object.values(student).forEach(value => {
    var cell = document.createElement("td");
    cell.textContent = value;
    row.appendChild(cell);
  });

  var actionCell = document.createElement("td");
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() 
  {
    deleteRow(this);
  });
  actionCell.appendChild(deleteButton);
  row.appendChild(actionCell);

  tbody.appendChild(row);
});

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);

function deleteRow(button) 
{
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}


// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

var image = document.createElement("img");
image.src = "https://images.pexels.com/photos/1326999/pexels-photo-1326999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
image.id = "image";

image.addEventListener("mouseover", function() {
  changeImage("https://images.pexels.com/photos/1327000/pexels-photo-1327000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
});

image.addEventListener("mouseout", function() {
  changeImage("https://images.pexels.com/photos/1326999/pexels-photo-1326999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
});

document.body.appendChild(image);

function changeImage(src) {
  var image = document.getElementById("image");
  image.src = src;
}

document.write("<br>")

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

var buttonIncrease = document.createElement("button");
buttonIncrease.textContent = "Increaser";
buttonIncrease.addEventListener("click", increaseCounter);

var spanCounter = document.createElement("span");
spanCounter.id = "counter";
spanCounter.textContent = "0";

var buttonDecrease = document.createElement("button");
buttonDecrease.textContent = "Decreaser";
buttonDecrease.addEventListener("click", decreaseCounter);

document.body.appendChild(buttonIncrease);
document.body.appendChild(spanCounter);
document.body.appendChild(buttonDecrease);

var counter = 0;
var counterSpan = document.getElementById("counter");

function increaseCounter() 
{
  counter++;
  counterSpan.textContent = counter;
}

function decreaseCounter() {
  if (counter > 0) {
    counter--;
    counterSpan.textContent = counter;
  }
}
