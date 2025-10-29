// Get the input fields and filters from the page

let taskName = document.getElementById("taskName")        // Where user types the task name
let category = document.getElementById("category")       // Where user types the task category
let deadline = document.getElementById("deadline")       // Where user types the task deadline
let statusFilter = document.getElementById("statusFilter") // Dropdown to filter tasks by status
let categoryFilter = document.getElementById("categoryFilter") // Input to filter tasks by category


// Get the button and list container
let addTask = document.getElementById("addTask"); // Button that adds a new task
let taskList = document.getElementById("taskList"); // UL (unordered list) where tasks will show up

// Try to get tasks from localStorage, if nothing there, start with empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to add a new task
function addNewTask() {
  // Make a new task object with the values from the inputs
  let task = {
    taskName: taskName.value,  // The name typed by user
    category: category.value,  // The category typed by user
    deadline: deadline.value,  // The deadline typed by user
    status: "In Progress",     // New tasks always start as "In Progress"
  }
  tasks.push(task); // Add the new task to the tasks array
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Save the array in localStorage

    // Clear the inputs so user can type a new task
    taskName.value = "";
    category.value = "";
    deadline.value = "";
}