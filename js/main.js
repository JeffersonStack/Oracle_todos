// DOM Elements

let inputElement = document.querySelector("#inputText");
let buttonElement = document.querySelector("button");
let listElement = document.querySelector("#list-todo");
let boxList = document.querySelector(".box-list");

// List Todos

let todos = ["Estudar Javascript", "Treinar Musculação", "Terminar Projeto"];

// Get Todos

function exibirTodos() {
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

// Remove Todos

// Save Todos
