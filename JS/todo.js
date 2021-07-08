const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
//todo-form안에 있는 input을 가져옴 
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = []; //새로고침을 했을 때 lcoalStorage가 덮어쓰기가 되었던 이유는 여기서 배열을 항상 초기화 했기 때문.

if (localStorage.getItem(TODOS_KEY) != null) {
  toDos = JSON.parse(localStorage.getItem(TODOS_KEY)); //새로고침할 때 localStorage에 덮어쓰기 방지를 위함
}


function saveToDos() {
  //JSON.stringify : 문자열로 바꿔줌
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  deleteTarget = event.target.parentElement.innerText.slice(0, -1); //맨 뒤에 x가 붙어서 slice를 이용해 제거함.
  const li = event.target.parentElement;
  li.remove(); //li element 삭제
  for (let i=0; i<toDos.length; i++) {
    if (toDos[i] === deleteTarget) { //삭제할 값을 Search
      toDos.splice(i, 1);
      saveToDos();
    }
  }
}

function paintToDo(newTodo) {
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
  toDos.push(newTodo);//toDos배열에 값 저장
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos != null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);
  parsedToDos.forEach(paintToDo); //paintToDo 에 인자값을 알아서 전달해줌
}
