let inputBox = document.getElementById("text");
let itemsBox = document.getElementById("items");

inputBox.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    let value = inputBox.value;
    let toDos = localStorage.getItem("todos");
    if (toDos == null) {
      todoObj = [];
    } else {
      todoObj = JSON.parse(toDos);
    }
    todoInfo = { name: value, status: "pending" };
    todoObj.push(todoInfo);
    localStorage.setItem("todos", JSON.stringify(todoObj));
    inputBox.value = "";
    showTodos();
  }
});

function showTodos() {
  let toDos = localStorage.getItem("todos");
  if (toDos == null) {
    todoObj = [];
  } else {
    todoObj = JSON.parse(toDos);
  }

  let html = "";
  todoObj.forEach((element, index) => {
    if (element.status == "done") {
      html += `<div class="item">
      <input type="checkbox" class="check-box" onclick="updateStatus(this)" id=${index} checked>
      <h3 class="taskDetail done">${element.name}</h3>
      <i class="fa-solid fa-trash options" onclick="deleteTodo(${index})"></i>
      </div>`;
    } else {
      html += `<div class="item">
      <input type="checkbox" class="check-box" onclick="updateStatus(this)" id=${index}>
      <h3 class="taskDetail">${element.name}</h3>
      <i class="fa-solid fa-trash options" onclick="deleteTodo(${index})"></i>
      </div>`;
    }
  });
  itemsBox.innerHTML = html;
}

function updateStatus(selectedTodo) {
  // console.log(selectedTodo);
  let h3 = selectedTodo.parentElement.lastElementChild;
  let toDos = JSON.parse(localStorage.getItem("todos"));
  if (selectedTodo.checked) {
    h3.classList.add("done");
    toDos[selectedTodo.id].status = "done";
  } else {
    h3.classList.remove("done");
    toDos[selectedTodo.id].status = "pending";
  }
  localStorage.setItem("todos", JSON.stringify(toDos));
  showTodos();
}

function deleteTodo(id) {
  // console.log(id);
  let toDos = JSON.parse(localStorage.getItem("todos"));
  toDos.splice(id, 1);
  localStorage.setItem("todos", JSON.stringify(toDos));
  showTodos();
}

showTodos();