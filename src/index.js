 // id="main-content"
  // id="create-task-form"
  // id="new-task-description"
  // id="list">
  // id="tasks">

  //Get the form
document.addEventListener("DOMContentLoaded", () => {
 const taskForm = document.getElementById("create-task-form");

  //Prevent reload
 taskForm.addEventListener("submit", function (event) {
  event.preventDefault();


  //Add task and color
  const color = document.getElementById("select-colour").value;
  const taskDescription = document.getElementById("new-task-description").value;
  if (taskDescription.trim() !== ""){
    addTaskToList(taskDescription, color);
    taskForm.reset();
  }
 });
});

  //Add tasks on the to do list and assign color
function addTaskToList(task, color) {
  const taskList = document.getElementById("tasks");
  const newTask = document.createElement("li");
  newTask.textContent = task;
  newTask.style.color = color;

    //Delete button
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    newTask.remove();
  });
  //Edit button
  const editButton = document.createElement("button"); // Create the Edit button
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => {
    const newTaskDescription = prompt("Edit your task:", task);
    if (newTaskDescription !== null && newTaskDescription.trim() !== "") {
      newTask.textContent = newTaskDescription; // Update the task text
      newTask.style.color = color; // Ensure the color remains the same
      newTask.appendChild(deleteButton); // Re-add the delete button
      newTask.appendChild(editButton); // Re-add the edit button
    }
  });

  newTask.appendChild(editButton);
  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask,);
}

