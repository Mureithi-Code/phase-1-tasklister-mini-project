 // id="main-content"
  // id="create-task-form"
  // id="new-task-description"
  // id="list">
  // id="tasks">

document.addEventListener("DOMContentLoaded", () => {
 const taskForm = document.getElementById("create-task-form");

 taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskDescription = document.getElementById("new-task-description").value;
  if (taskDescription.trim() !== ""){
    addTaskToList(taskDescription);
    taskForm.reset();
  }
 });
});

function addTaskToList(task) {
  const taskList = document.getElementById("tasks");
  const newTask = document.createElement("li");
  newTask.textContent = task;

  const deleteButton = document.createElement("button")
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    newTask.remove();
  });

  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);
}

