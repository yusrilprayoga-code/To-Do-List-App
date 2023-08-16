let addButton = document.getElementById("buttonText");
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
    alert("Button has already clicked");
}

let todoEntryBox = document.getElementById("inputText");
let todoList = document.getElementById("todo-list");

function newTodoItem(itemText, completed) {
    let todoItem = document.createElement("li");
    let todoText = document.createTextNode(itemText);
    todoItem.appendChild(todoText);

    if (completed) {
        todoItem.classList.add("completed");
    }
    todoList.appendChild(todoItem);
    todoItem.addEventListener("dblclick", toggleTodoItemState);
}

function addToDoItem() {
    var itemText = todoEntryBox.value;
    newTodoItem(itemText, false);
}

var toDoInfo = {
    "task": "Thing I need to do",
    "completed": false
};

function toggleTodoItemState() {
    if(this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

function clearCompletedToDoItems() {
    var completedItems = todoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }

    alert("completed clear")
}
function emptyList() {
    var toDoItems = todoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}

function saveList() {
    var toDos = [];

    for (var i = 0; i < todoList.children.length; i++) {
        var toDo = todoList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);

    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
    alert("completed saved")
}

function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newTodoItem(toDo.task, toDo.completed);
        }
    }
    alert("Completed Load")
}

loadList();

