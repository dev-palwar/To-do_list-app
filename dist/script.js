"use strict";
const todoItems = "todoItems";
document.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.getElementById("text");
    const itemsBox = document.getElementById("items");
    inputBox === null || inputBox === void 0 ? void 0 : inputBox.addEventListener("keyup", (e) => {
        if (e.key === "Enter" && inputBox.value.trim() !== "") {
            let value = inputBox.value.trim();
            let todoObj = [];
            if (localStorage.getItem(todoItems)) {
                todoObj = JSON.parse(localStorage.getItem(todoItems));
            }
            let todoInfo = { name: value, status: false };
            todoObj.push(todoInfo);
            localStorage.setItem(todoItems, JSON.stringify(todoObj));
            inputBox.value = "";
            showTodos();
        }
    });
    function showTodos() {
        let todoObj = [];
        if (localStorage.getItem(todoItems)) {
            todoObj = JSON.parse(localStorage.getItem(todoItems));
        }
        let html = "";
        todoObj.forEach((element, index) => {
            html += `<div class="item">
        <input type="checkbox" class="check-box" onclick="updateStatus(this)" id="${index}" ${element.status ? "checked" : ""}>
        <h3 class="taskDetail ${element.status ? "done" : ""}">${element.name}</h3>
        <i class="fa-solid fa-trash options" onclick="deleteTodo(${index})"></i>
      </div>`;
        });
        if (itemsBox) {
            itemsBox.innerHTML = html;
        }
    }
    window.updateStatus = function (selectedTodo) {
        const h3 = selectedTodo.nextElementSibling;
        let toDos = JSON.parse(localStorage.getItem(todoItems));
        toDos[selectedTodo.id].status = selectedTodo.checked;
        if (selectedTodo.checked) {
            h3.classList.add("done");
        }
        else {
            h3.classList.remove("done");
        }
        localStorage.setItem(todoItems, JSON.stringify(toDos));
        showTodos();
    };
    window.deleteTodo = function (id) {
        let toDos = JSON.parse(localStorage.getItem(todoItems));
        toDos.splice(id, 1);
        localStorage.setItem(todoItems, JSON.stringify(toDos));
        showTodos();
    };
    showTodos();
});
