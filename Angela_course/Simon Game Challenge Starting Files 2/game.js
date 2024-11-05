var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];
var level = 0;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  userClickPattern = [];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
  level++;
  $("#level-title").text("Level " + level);
}
var statusWhile = true;

$(".btn").on("click", function () {
  var clickedElement = $(this);
  var btnId = clickedElement.attr("id");
  userClickPattern.push(btnId);
  animatePress(btnId);
  checkAnswer();
  playSound(btnId);
});
$(document).on("keydown", function (event) {
  if (statusWhile) {
    //   if (event.key.toLowerCase() === "a") {
    nextSequence();

    $("#level-title").text("Level " + level);
    statusWhile = false;

    //   }
  }
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColor) {
  var btnSelected = $("#" + currentColor);
  btnSelected.addClass("pressed");
  setTimeout(function () {
    btnSelected.removeClass("pressed");
  }, 100);
}
function checkAnswer() {

  var latestAswer = userClickPattern.length - 1;
  if (userClickPattern[latestAswer] === gamePattern[latestAswer]) {
    if (gamePattern.length === userClickPattern.length) {
      setTimeout(function () {
        nextSequence(latestAswer);
      }, 1000);
    }
  } else {

    var audio = new Audio("./sounds/wrong.mp3");
    audio.play();
    var bodySelection = $("body");
    bodySelection.addClass("game-over");
    setTimeout(function () {
      bodySelection.removeClass("game-over");
    }, 100);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  userClickPattern = [];
  statusWhile = true;
}

// for loop
// for (var i = 0; i < gamePattern.length; i++) {
//   $("#" + gamePattern[i]).css("background-color", "black");
// }
