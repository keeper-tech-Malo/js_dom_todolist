
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
const buttonComplet = document.createElement("button");
buttonComplet.innerHTML = "<i class='fas fa-check'></i>";
buttonComplet.classList.add("check-btn");
todoDiv.appendChild(buttonComplet);

       // creation poubelle
const poubelleButton = document.createElement("button");
poubelleButton.innerHTML = "<i class='fas fa-trash'></i>";
poubelleButton.classList.add("trash-btn");
todoDiv.appendChild(poubelleButton);

       // Appelle all
todoList.appendChild(todoDiv);
}

function addTodo(e) {
       // Valider et empêcher l'actualisation 
e.preventDefault();
if (!todoInput.value) return;

// creation des tous les compenant
createComponents(todoInput.value);

// Ajouter todo au stockage local 
saveLocalTodos(todoInput.value);

// focus sur le input
todoInput.value = "";
}

function deleteCheck(e) {
const item = e.target;
const todo = item.parentElement;

       // todo supprimer
if (item.classList[0] === "trash-btn") {
        todo.classList.add("fall");
        todo.addEventListener("animationend", function () {
        removeLocalTodos(todo);
        todo.remove();
        });
}

       // todo complet
if (item.classList[0] === "check-btn") todo.classList.toggle("complet");
}

function filterTodo(e) {
const value = e.target.value;
const todos = todoList.childNodes;
console.log(value);
todos.forEach(function (todo) {
switch (value) {
        case "tous":
                todo.style.display = "flex";
                break;
        case "complet":
                if (todo.classList.contains("complet")) {
                todo.style.display = "flex";
                } else {
                todo.style.display = "none";
                }

                break;
        case "non-complet":
                if (!todo.classList.contains("complet")) {
                todo.style.display = "flex";
                } else {
                todo.style.display = "none";
                }
                break;
        default:
                return;
        }
});
}

function saveLocalTodos(todo) {
       // Check
let todos;

       // si il a deja rajout dans todos
if (localStorage.getItem("todos") !== null) {
        todos = JSON.parse(localStorage.getItem("todos"));
} else {
        todos = [];
}

todos.push(todo);
localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
let todos;

       // si il a deja un item rajout dans todo
if (localStorage.getItem("todos") !== null) {
        todos = JSON.parse(localStorage.getItem("todos"));
} else {
        todos = [];
}
// creation du todo
todos.forEach(function (todo) {
        createComponents(todo);
});
}
function removeLocalTodos(todo) {
        let todos;
        if (localStorage.getItem("todos") !== null) {
                todos = JSON.parse(localStorage.getItem("todos"));
        } else {
                todos = [];
        }
        const todoIndex = todo.children[0].innerText;
        todos.splice(todos.indexOf(todoIndex), 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        }




