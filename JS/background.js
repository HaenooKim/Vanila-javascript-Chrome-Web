const images = ["0.jpeg", "1.jpeg", "2.jpg", "3.jpeg", "4.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

//Html에 새로운 Element를 생성
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

//appendChild : html끝에 추가하는 것
//prepend : html 맨앞에 추가하는 것
document.body.appendChild(bgImage);

console.log(bgImage);