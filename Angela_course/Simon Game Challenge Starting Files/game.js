var buttonColours = ["red", "blue", "green", "yellow"];

var randomIndex = randomNumber();
var randomChoosenColor = buttonColours[randomIndex];

function randomNumber() {
  return Math.floor(Math.random() * 4); // 3을 4로 변경
}

var gamePattern = [];
gamePattern.push(randomChoosenColor);

var audio = new Audio("sounds/" + randomChoosenColor + ".mp3");

audio.play();

setTimeout(function () {
  $("#" + randomChoosenColor).addClass("pressed"); // 선택자에 #을 추가

  setTimeout(function () {
    $("#" + randomChoosenColor).removeClass("pressed"); // 클래스 제거 추가
  }, 100);
}, 100);

// user choosen color
var btnLen = document.querySelectorAll(".btn").length;
for (let i = 0; i < btnLen; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    console.log(this.id);
  });
}