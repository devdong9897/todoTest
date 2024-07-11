function addTodo() {
  if (window.event.keyCode === 13) {
    const input = document.getElementById("input-text");
    const addBtn = document.getElementById("add-btn");
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");
    const todoList = document.getElementById("todo-list");

    newSpan.textContent = input.value;
    todoList.appendChild(newLi);
    newLi.appendChild(deleteBtn);
    newLi.appendChild(newSpan);
    console.log(todoList);
  }
}
