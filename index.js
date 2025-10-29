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