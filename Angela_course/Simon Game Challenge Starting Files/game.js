var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickPattern = [];

function randomNumber() {
  return Math.floor(Math.random() * 4); // 3을 4로 변경
}
// user choosen color
var btnLen = document.querySelectorAll(".btn").length;

for (let i = 0; i < btnLen; i++) {
  var userChoosenColor;
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    userChoosenColor = this.id;
    userClickPattern.push(userChoosenColor);
  });
}
// auto select animation
function nextSequence() {
  var randomIndex = randomNumber();
  var randomChoosenColor = buttonColours[randomIndex];
  gamePattern.push(randomChoosenColor);

  setTimeout(function () {
    $("#" + randomChoosenColor).addClass("pressed");

    setTimeout(function () {
      $("#" + randomChoosenColor).removeClass("pressed");
    }, 100);
  }, 100);

  // Audio play
  var audio = new Audio("sounds/" + randomChoosenColor + ".mp3");
  audio.play();
}
