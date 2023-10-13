// Array zum Speichern der Aufgaben
let tasks = [];

// Funktion zum Hinzufügen einer neuen Aufgabe
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    tasks.push(taskText);
    taskInput.value = '';
    renderTasks();
  }
}

// Funktion zum Rendern der Aufgabenliste
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

// Funktion zum Bearbeiten einer Aufgabe
function editTask(index) {
  const newTaskText = prompt('Neuen Aufgabentext eingeben', tasks[index]);

  if (newTaskText !== null) {
    tasks[index] = newTaskText.trim();
    renderTasks();
  }
}

// Funktion zum Abhaken einer Aufgabe
function toggleTask(index) {
  tasks[index] = `✓ ${tasks[index]}`;
  renderTasks();
}

// Funktion zum Löschen einer Aufgabe
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Initialisierung
renderTasks();
