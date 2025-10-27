"use strict"
// Part 1. Introduction to JS
// Task 0 -- First Script 
console.log("Bekbauly, SE-2419");
alert("Hello, World!");

// Task 1 -- Variables & Operators
let lastname = "Galymzhan"; 
let age = 18 ;
let isStudent = true; 

let sum = 15 + 60;
let product = 7 * 15; 

console.log("My lastname is: ", lastname);
console.log("Arithmetical operations:");
console.log("15 + 60 =", sum, "|", "7 * 15 =", product);

let concatenate = "My last name: " + lastname + " and I am " + age + " years old.";
console.log(concatenate);


// Part 2. DOM Manipulation
// Task 2 - Changing Content
function changeText() {
    document.getElementById("text").innerText = "This is new text";
}

// Task 3 - Changing Styles
function changeColor() {
    document.getElementById("box").style.background = "green";
}

function changeFont() {
    document.getElementById("box").style.fontSize = "25px";
}

// Task 4 - Creating & Removing Elements
function addItem() {
    let li = document.createElement("li");
    li.textContent = "New element";
    document.getElementById("list").appendChild(li);
}

function removeItem() {
    let list = document.getElementById("list");
    list.removeChild(list.lastElementChild);
}


// Part 3. Events
// Task 5 -- Mouse Events
function changeColor2() {
    document.getElementById("square").style.background = "yellow";
}

function resetColor() {
    document.getElementById("square").style.background = "gray";
}

// Task 6 - Keyboard Events
function showValue() {
  let value = document.getElementById("input").value;
  document.getElementById("output").innerText = "You entered: " + value;
}

// Task 7 - Form Validation
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!name || !email || !password) {
    document.getElementById("error").innerText = "Please, fill in all fields!";
    return false;
  }
}

// Task 8 - To-Do List
let tasks = [];

function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;
  if (!taskText) return;

  tasks.push(taskText);

  let li = document.createElement("li");
  li.textContent = taskText;

  li.onclick = function() {
    li.style.textDecoration = "line-through";
  };

  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}