// 1. Create a signup form and display form data in your web
// page on submission.

var form = document.createElement("form");
form.id = "signupForm";

var heading = document.createElement("h1");
heading.textContent = "Signup Form";

var nameLabel = document.createElement("label");
nameLabel.textContent = "Name:";
nameLabel.setAttribute("for", "name");

var emailLabel = document.createElement("label");
emailLabel.textContent = "Email:";
emailLabel.setAttribute("for", "email");

var passwordLabel = document.createElement("label");
passwordLabel.textContent = "Password:";
passwordLabel.setAttribute("for", "password");

var nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "name";
nameInput.required = true;

var emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.id = "email";
emailInput.required = true;

var passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.id = "password";
passwordInput.required = true;

var submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "Submit";

var formResult = document.createElement("div");
formResult.id = "formResult";

document.body.appendChild(heading);
form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));
form.appendChild(passwordLabel);
form.appendChild(passwordInput);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));
form.appendChild(submitButton);
document.body.appendChild(form);
document.body.appendChild(formResult);


form.addEventListener("submit", function(event) 
{
  displayFormData(event);
});

function displayFormData(event) 
{
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var formResult = document.getElementById("formResult");
  formResult.innerHTML = "<h2>Form Data:</h2> <p><strong>Name:</strong>" + name + "</p><p><strong>Email:</strong>"+ email + "</p><p><strong>Password:</strong>" + password+"</p>";
}

document.write("<br>");

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.


var item1 = document.createElement("div");
item1.classList.add("item");

var item2 = document.createElement("div");
item2.classList.add("item");


var heading1 = document.createElement("h3");
heading1.textContent = "Item 1";

var heading2 = document.createElement("h3");
heading2.textContent = "Item 2";

var summary1 = document.createElement("p");
summary1.classList.add("summary");
summary1.textContent = "In order to perform well in life, our body needs energy. ";

var summary2 = document.createElement("p");
summary2.classList.add("summary");
summary2.textContent = "Sports are an essential part of our society. ";


var button1 = document.createElement("button");
button1.textContent = "Read more";
button1.addEventListener("click", function() {
  showDetails(button1);
});

var button2 = document.createElement("button");
button2.textContent = "Read more";
button2.addEventListener("click", function() {
  showDetails(button2);
});

var details1 = document.createElement("p");
details1.classList.add("details");
details1.textContent = "We get this energy from the food we eat. Without food, there will be no life. In today’s world, there are so many dishes available worldwide. Food comes in a wide variety all around the world. Dosa, Paneer, Naan, Chapati, Biryani, and more Indian delicacies are available. We are also offered western cuisines such as noodles, pasta, burgers, fries, pizzas and more dominating the food industry. In my favourite food essay, I will tell you about the food I like eating the most.";
details1.style.display = "none";

var details2 = document.createElement("p");
details2.classList.add("details");
details2.textContent = " They help us in many ways and play a vital role too. People who play sports from an early age can learn discipline, teamwork, leadership and many other beneficial activities. Similarly, they also unite people. There are different types of sports that have different rules and equipment. Let’s look at the different types and their benefits.";
details2.style.display = "none";

item1.appendChild(heading1);
item1.appendChild(summary1);
item1.appendChild(button1);
item1.appendChild(details1);

item2.appendChild(heading2);
item2.appendChild(summary2);
item2.appendChild(button2);
item2.appendChild(details2);

document.body.appendChild(item1);
document.body.appendChild(item2);


function showDetails(button)
 {
  var details = button.nextElementSibling;
  details.style.display = "block";
}


// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.


var students = [];

function addStudent(event)  
{
  event.preventDefault();
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var grade = document.getElementById("grade").value;
  var student = { name: name, age: age, grade: grade };
  students.push(student);
  displayStudents();
  clearForm();
}

function displayStudents() 
{
  var studentTableBody = document.getElementById("studentTableBody");
  studentTableBody.innerHTML = "";
  for (var i = 0; i < students.length; i++) 
  {
    var student = students[i];
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    var ageCell = document.createElement("td");
    var gradeCell = document.createElement("td");
    var actionsCell = document.createElement("td");
    nameCell.textContent = student.name;
    ageCell.textContent = student.age;
    gradeCell.textContent = student.grade;
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function (index) 
    {
      return function () 
      {
        deleteStudent(index);
      };
    }(i);
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function (index) 
    {
      return function () 
      {
        editStudent(index);
      };
    }(i);
    actionsCell.appendChild(deleteButton);
    actionsCell.appendChild(editButton);
    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(gradeCell);
    row.appendChild(actionsCell);
    studentTableBody.appendChild(row);
  }
}

function deleteStudent(index) 
{
  students.splice(index, 1);
  displayStudents();
}

function editStudent(index) 
{
  var student = students[index];
  var nameInput = document.getElementById("name");
  var ageInput = document.getElementById("age");
  var gradeInput = document.getElementById("grade");
  nameInput.value = student.name;
  ageInput.value = student.age;
  gradeInput.value = student.grade;
}

function clearForm() 
{
  var nameInput = document.getElementById("name");
  var ageInput = document.getElementById("age");
  var gradeInput = document.getElementById("grade");
  nameInput.value = "";
  ageInput.value = "";
  gradeInput.value = "";
}

document.getElementById("studentForm").addEventListener("submit", addStudent);

