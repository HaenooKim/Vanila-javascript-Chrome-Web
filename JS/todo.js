const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
//todo-form안에 있는 input을 가져옴 
const toDoInput = document.querySelector("#todo-form input");

const toDos = [];
console.log(toDos);

function saveToDos() {
  localStorage.setItem("todo", toDos);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove(); //li element 삭제
}

function painToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  span.innerHTML=newTodo;
  button.innerHTML="x";
  button.addEventListener("click", deleteToDo);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;//list 입력을 받아놓고
  toDoInput.value=""; //엔터를 누르면 값이 없어지도록 한다.
  //console.log(toDoInput.value);
  toDos.push(newTodo);
  painToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);