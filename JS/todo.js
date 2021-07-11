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
  const li = event.target.parentElement;
  const deleteTargetId = parseInt(event.target.parentElement.id)
  for(let i=0; i<toDos.length; i++) {
    if (toDos[i].id === deleteTargetId) {
      toDos.splice(i, 1);
      saveToDos();
    }
  }
  li.remove(); //li element 삭제
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  span.innerHTML=newTodo.text;
  button.innerHTML="x";
  button.addEventListener("click", deleteToDo);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;//list 입력을 받아놓고
  toDoInput.value=""; //엔터를 누르면 값이 없어지도록 한다.
  //console.log(toDoInput.value);
  const newTodoObj = {
    text : newTodo,
    id : Date.now() //아이디를 랜덤값으로 주기위해 Date.now()를 사용함.
  };

  toDos.push(newTodoObj);//toDos배열에 값 저장
  paintToDo(newTodoObj); //todo obj를 넘겨줌
  saveToDos();
}



const savedToDos = localStorage.getItem(TODOS_KEY);

const userName = localStorage.getItem("userName");

toDoForm.addEventListener("submit", handleToDoSubmit);




if (saveToDos != null) {
  const parsedToDos = JSON.parse(savedToDos);
  //console.log(parsedToDos);
  parsedToDos.forEach(paintToDo); //paintToDo 에 인자값을 알아서 전달해줌
}
