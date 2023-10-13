let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    tasks.push(taskText);
    taskInput.value = '';
    renderTasks();
  }
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox" onchange="toggleTask(${index})">
      <span>${task}</span>
      <button onclick="editTask(${index})">Bearbeiten</button>
      <button onclick="deleteTask(${index})">Löschen</button>
    `;
    taskList.appendChild(listItem);
  });
}

function editTask(index) {
  const newTaskText = prompt('Neuen Aufgabentext eingeben', tasks[index]);

  if (newTaskText !== null) {
    tasks[index] = newTaskText.trim();
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index] = `✓ ${tasks[index]}`;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();
