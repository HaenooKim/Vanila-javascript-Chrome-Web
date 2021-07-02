const clock = document.querySelector("h2#clock");

//setInterval : 지정한 시간 뒤 계속 함수 호출됨.
//setTimeout : 지정한 시간 뒤 함수 호출 한번
//console창에 console.log(Date) 입력 -> prototype에 보면 Object들을 볼 수 있음.

function getClock() {
  const date = new Date();
  const hours = date.getHours() < 10 ? '0'+date.getHours() : date.getHours();
  const minutes = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
  const seconds = String(date.getSeconds().padStart(2, "0"));

  //날짜는 number타입이라서 String으로 형변환. (ctrl누른 상태에서 getSeconds에 커서 가져다 대면 type을 알 수 있음)
  //padStart : 첫번째 인자에는 String의 총 길이, 두번째 인자는 '앞에' 채워질 String을 입력한다.
  //padEnd : 첫번째 인자에는 String의 총 길이, 두번째 인자는 '뒤에' 채워질 String을 입력한다.
  
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}
getClock();
//이걸 해주지 않으면 새로고침할 때 처음에 00:00이 보이고 1초 뒤 getClock이 실행된다.
//따라서 시작부터 시계가 보이려면 자바스크립트가 이걸 바로 읽도록 해야함.

setInterval(getClock, 1000); //1000ms마다 getClock함수를 호출