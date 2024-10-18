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

// user choosen color
var userChoosenColor;
var userClickPattern = [];
var btnLen = document.querySelectorAll(".btn").length;

for (let i = 0; i < btnLen; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    userChoosenColor = this.id;
    userClickPattern.push(userChoosenColor);
  });
}
// pattor array

// auto select animation
setTimeout(function () {
  $("#" + randomChoosenColor).addClass("pressed");

  setTimeout(function () {
    $("#" + randomChoosenColor).removeClass("pressed");
  }, 100);
}, 100);
