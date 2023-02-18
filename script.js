let tasks = [];

function addTask() {
  const newTaskInput = document.getElementById("new-task");
  const newTask = newTaskInput.value;
  if (newTask !== "") {
    tasks.push(newTask);
    newTaskInput.value = "";
    updateList();
  }
}

function updateList() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    const taskName = document.createElement("span");
    taskName.innerText = tasks[i];
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = () => editTask(i);
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => deleteTask(i);
    li.appendChild(taskName);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }
}

function editTask(index) {
  const updatedTask = prompt("Enter updated task", tasks[index]);
  if (updatedTask !== null) {
    tasks[index] = updatedTask;
    updateList();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateList();
}

updateList();
