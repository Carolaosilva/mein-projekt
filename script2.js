// script.js
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var dateInput = document.getElementById("dateInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Bitte geben Sie eine Aufgabe ein.");
    return;
  }

  var taskItem = document.createElement("li");
  taskItem.innerHTML = taskInput.value + " - " + dateInput.value;
  taskItem.onclick = function() {
    taskItem.classList.toggle("completed");
  };

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Löschen";
  deleteButton.onclick = function() {
    taskItem.remove();
  };

  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  taskInput.value = "";
  dateInput.value = "";
}
