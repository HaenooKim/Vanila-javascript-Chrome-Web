//--------------- Log in -------------------

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); //login form 안에 있는 input Element를 가져옴
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY = localStorage.getItem("userName");

function onLoginSubmit(event) {//이벤트 발생 시 기본 정보들을 넘겨받음
  event.preventDefault(); //브라우저의 기본 동작을 막는다.
  const userName = loginInput.value;
  console.log(userName);
  localStorage.setItem("userName", userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML=`Hello ${userName}`;
}


const savedUserName=localStorage.getItem("userName");

if (savedUserName===null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML=`Hello ${savedUserName}`;
}

