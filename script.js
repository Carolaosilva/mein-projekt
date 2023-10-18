let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = '';
    renderTasks();
  }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTask(index));
        listItem.appendChild(checkbox);

        const taskText = document.createElement('span');
    taskText.textContent = task.completed ? `✓ ${task.text}` : task.text;
    listItem.appendChild(taskText);

    const editButton = document.createElement('button');
    editButton.textContent = 'Bearbeiten';
    editButton.addEventListener('click', () => editTask(index, taskText));
    listItem.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Löschen';
    deleteButton.addEventListener('click', () => deleteTask(index));
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
  });
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function editTask(index, taskTextElement) {
  const currentText = tasks[index].text;
  const newText = prompt('Neuen Aufgabentext eingeben:', currentText);
  if (newText !== null && newText.trim() !== '') {
    tasks[index].text = newText.trim();
    taskTextElement.textContent = tasks[index].completed ? `✓ ${newText}` : newText;
  }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
  }