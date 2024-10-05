 // id="main-content"
  // id="create-task-form"
  // id="new-task-description"
  // id="list">
  // id="tasks">

document.addEventListener("DOMContentLoaded", () => {
 const taskForm = document.getElementById("create-task-form");

 taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const color = document.getElementById("select-colour").value;
  const taskDescription = document.getElementById("new-task-description").value;
  if (taskDescription.trim() !== ""){
    addTaskToList(taskDescription, color);
    taskForm.reset();
  }
 });
});

function addTaskToList(task, color) {
  const taskList = document.getElementById("tasks");
  const newTask = document.createElement("li");
  newTask.textContent = task;
  newTask.style.color = color;

  const deleteButton = document.createElement("button")
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    newTask.remove();
  });

  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask,);
}

