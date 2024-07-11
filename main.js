function addTodo() {
  if (window.event.keyCode === 13) {
    const input = document.getElementById("input-text");
    const newLi = document.createElement("li");
    const addBtn = document.getElementById("add-btn");
    const newSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");
    const todoList = document.getElementById("todo-list");

    newSpan.textContent = input.value;
    todoList.appendChild(newLi);
    deleteBtn.textContent = "X";
    newLi.appendChild(deleteBtn);
    newLi.appendChild(newSpan);
    console.log(todoList);
  }
}

const deleteAll = () => {
  const liList = document.querySelectorAll("li");
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove()
  }
};
