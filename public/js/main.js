
// selecteur
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filter = document.querySelector(".filter-todo");

// Event Listeners

document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filter.addEventListener("change", filterTodo);

// function

function createComponents(value) {
// creation de div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

// Creation li
const newTodo = document.createElement("li");
newTodo.innerText = value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);

// Creation des bouton
const completedButton = document.createElement("button");
completedButton.innerHTML = "<i class='fas fa-check'></i>";
completedButton.classList.add("check-btn");
todoDiv.appendChild(completedButton);

        // Creation Trash button
const trashButton = document.createElement("button");
trashButton.innerHTML = "<i class='fas fa-trash'></i>";
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

 
 todoList.appendChild(todoDiv);
}
