// DOM Elements

let inputElement = document.querySelector("#inputText");
let buttonElement = document.querySelector("button");
let listElement = document.querySelector("#list-todo");
let boxList = document.querySelector(".box-list");

// List Todos

let todos = JSON.parse(localStorage.getItem("list-items")) || [];

// Get Todos

function exibirTodos() {
  // clear Todo
  listElement.innerHTML = "";

  todos.forEach(todo => {
    // Create Elements
    let addElement = document.createElement("li");
    let linkElement = document.createElement("a");
    let iconElement = document.createElement("i");
    linkElement.setAttribute("href", "#");
    let linkText = iconElement;

    // Atributtes class list
    addElement.setAttribute("class", "list-group-item");
    linkElement.setAttribute("class", "right-element");
    iconElement.setAttribute("class", "fas fa-trash-alt");

    // Select todos position
    let pos = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "removeTodo(" + pos + ")");

    // Todo Text
    let todoText = document.createTextNode(todo);

    // Body Todos
    linkElement.appendChild(linkText);
    addElement.appendChild(todoText);
    addElement.appendChild(linkElement);
    listElement.appendChild(addElement);
  });
}

exibirTodos();

// Add Todos

function addTodos() {
  let textTodos = inputElement.value;
  todos.push(textTodos);
  inputElement.value = "";

  exibirTodos();
  saveTodos();
}

buttonElement.addEventListener("click", () => {
  addTodos();
});

// Remove Todos

function removeTodo(pos) {
  todos.splice(pos, 1);
  exibirTodos();
  saveTodos();
}

// Save Todos
function saveTodos() {
  localStorage.setItem("list-items", JSON.stringify(todos));
}
