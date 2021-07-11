//https://openweathermap.org/api 에 접속

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
}

function onGeoError() {
  alert("위치를 찾을 수 없습니다.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 
//ctrl을 누르고 여기에 커서를 대보면 성공할 경우 
//불러올 함수와 실패할 경우 불러올 함수의 인자가 필요한 것을 알 수 있음.