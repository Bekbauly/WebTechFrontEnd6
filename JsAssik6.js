// Task 0: First Script
console.log("John Doe, CS101");
alert("Hello, JavaScript World!");

// Task 1: Variables & Operators
let myString = "Hello";
let myNumber = 42;
let myBoolean = true;

console.log(myNumber + 8);
console.log(myNumber - 10);
console.log(myString + " World");
console.log("Boolean value: " + myBoolean);

// Task 2: Changing Content
function changeText() {
    document.getElementById("changePara").innerText = "Text has been changed!";
}

// Task 3: Changing Styles
function changeBackground() {
    document.getElementById("styleDiv").style.backgroundColor = "red";
}

function changeFontSize() {
    document.getElementById("styleDiv").style.fontSize = "24px";
}

// Task 4: Creating & Removing Elements
function addItem() {
    const li = document.createElement("li");
    li.innerText = "New Item";
    document.getElementById("itemList").appendChild(li);
}

function removeItem() {
    const list = document.getElementById("itemList");
    const last = list.lastElementChild;
    if (last) list.removeChild(last);
}

// Task 5: Mouse Events
const mouseBox = document.getElementById("mouseBox");
mouseBox.addEventListener("mouseover", () => {
    mouseBox.style.backgroundColor = "yellow";
});
mouseBox.addEventListener("mouseout", () => {
    mouseBox.style.backgroundColor = "green";
});

// Task 6: Keyboard Events
const keyInput = document.getElementById("keyInput");
keyInput.addEventListener("keyup", () => {
    const value = keyInput.value;
    document.getElementById("inputDisplay").innerText = "Current input: " + value;
});

// Task 7: Form Validation
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.getElementById("validationForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();
    const error = document.getElementById("errorMessage");

    if (!name || !email || !password) {
        error.innerText = "Error: All fields are required!";
        return;
    }

    if (!isValidEmail(email)) {
        error.innerText = "Error: Invalid email format!";
        return;
    }

    error.innerText = ""; // всё ок
    alert("Form submitted successfully!");
});


let tasks = [];

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerText = task.text + " ";
        if (task.completed) li.style.textDecoration = "line-through";

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", () => deleteTask(index));
        li.appendChild(deleteBtn);

        const completeBtn = document.createElement("button");
        completeBtn.type = "button";
        completeBtn.innerText = task.completed ? "Undo" : "Complete";
        completeBtn.addEventListener("click", () => toggleComplete(index));
        li.appendChild(completeBtn);

        list.appendChild(li);
    });
}

function addTask() {
    const inputField = document.getElementById("taskInput");
    const input = inputField.value.trim();
    if (!input) return;

    tasks.push({ text: input, completed: false });
    renderTasks();
    inputField.value = "";
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Event listeners
document.getElementById("changeBtn").addEventListener("click", changeText);
document.getElementById("bgBtn").addEventListener("click", changeBackground);
document.getElementById("fontBtn").addEventListener("click", changeFontSize);
document.getElementById("addItemBtn").addEventListener("click", addItem);
document.getElementById("removeItemBtn").addEventListener("click", removeItem);
document.getElementById("addTaskBtn").addEventListener("click", addTask);

// Add task Enter
document.getElementById("taskInput").addEventListener("keyup", (e) => {
    if (e.key === "Enter") addTask();
});
