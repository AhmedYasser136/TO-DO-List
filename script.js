// Get HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Define tasks array
let tasks = [];

// Render tasks
function renderTasks() {
  // Clear existing tasks
  taskList.innerHTML = '';

  // Loop through tasks and create list items
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.innerText = task;

    // Add edit button
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', function() {
      editTask(i);
    });

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteTask(i);
    });

    // Append list item to list
    listItem.appendChild(taskText);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  }
}

// Add task on button click
addTaskButton.addEventListener('click', function(event) {
  event.preventDefault();
  addTask();
});

// Add task on enter key press
taskInput.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addTask();
  }
});

// Add task to array and render tasks
function addTask() {
  const task = taskInput.value.trim();
  if (task !== '') {
    tasks.push(task);
    taskInput.value = '';
    renderTasks();
    saveTasks();
  }
}

// Edit task in array and render tasks
function editTask(index) {
  const task = tasks[index];
  const newTask = prompt('Edit task:', task);
  if (newTask !== null && newTask.trim() !== '') {
    tasks[index] = newTask.trim();
    renderTasks();
    saveTasks();
  }
}

// Delete task from array and render tasks
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
  saveTasks();
}

// Load tasks from local storage
function loadTasks() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks !== null) {
    tasks = JSON.parse(storedTasks);
    renderTasks();
  }
}

// Save tasks to local storage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks on page load
window.addEventListener('load', function() {
  loadTasks();
});
