import "./style.css";

interface Todo {
  name: string;
  status: boolean;
}

const todoItems = "todoItems";

document.addEventListener("DOMContentLoaded", () => {
  const inputBox = document.getElementById("text") as HTMLInputElement | null;
  const itemsBox = document.getElementById("items") as HTMLElement | null;

  inputBox?.addEventListener("keyup", (e: KeyboardEvent) => {
    if (e.key === "Enter" && inputBox.value.trim() !== "") {
      let value = inputBox.value.trim();
      let todoObj: Todo[] = [];

      if (localStorage.getItem(todoItems)) {
        todoObj = JSON.parse(localStorage.getItem(todoItems) as string);
      }

      let todoInfo: Todo = { name: value, status: false };
      todoObj.push(todoInfo);
      localStorage.setItem(todoItems, JSON.stringify(todoObj));
      inputBox.value = "";
      showTodos();
    }
  });

  function showTodos() {
    let todoObj: Todo[] = [];

    if (localStorage.getItem(todoItems)) {
      todoObj = JSON.parse(localStorage.getItem(todoItems) as string);
    }

    let html = "";

    todoObj.forEach((element: Todo, index: number) => {
      html += `<div class="item">
        <input type="checkbox" class="check-box" onclick="updateStatus(this)" id="${index}" ${
        element.status ? "checked" : ""
      }>
        <h3 class="taskDetail ${element.status ? "done" : ""}">${
        element.name
      }</h3>
        <i class="fa-solid fa-trash options" onclick="deleteTodo(${index})"></i>
      </div>`;
    });

    if (itemsBox) {
      itemsBox.innerHTML = html;
    }
  }

  (window as any).updateStatus = function (selectedTodo: HTMLInputElement) {
    const h3 = selectedTodo.nextElementSibling as HTMLElement;
    let toDos = JSON.parse(localStorage.getItem(todoItems) as string);

    toDos[selectedTodo.id].status = selectedTodo.checked;

    if (selectedTodo.checked) {
      h3.classList.add("done");
    } else {
      h3.classList.remove("done");
    }

    localStorage.setItem(todoItems, JSON.stringify(toDos));
    showTodos();
  };

  (window as any).deleteTodo = function (id: number) {
    let toDos = JSON.parse(localStorage.getItem(todoItems) as string);
    toDos.splice(id, 1);
    localStorage.setItem(todoItems, JSON.stringify(toDos));
    showTodos();
  };

  showTodos();
});
