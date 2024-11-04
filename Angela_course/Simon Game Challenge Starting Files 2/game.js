var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];
var level = 0;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
  level++;
}

$(".btn").on("click", function () {
  var clickedElement = $(this);
  var btnId = clickedElement.attr("id");
  userClickPattern.push(btnId);
  playSound(btnId);
  animatePress(btnId);
});

$(document).on("keydown", function (event) {
  if (event.key.toLowerCase() === "a") {
    nextSequence();
    $("#level-title").text("Level " + level);
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
function checkAnswer(currentLevel) {
  var latestAswer = userClickPattern.length - 1;
  if (userClickPattern[latestAswer] === gamePattern[latestAswer]) {
    setTimeout(function () {
      nextSequence();
    }, 1000);
    console.log(
      "True" + userClickPattern[latestAswer] + gamePattern[latestAswer]
    );
  } else {
    console.log(
      "False" + userClickPattern[latestAswer] + gamePattern[latestAswer]
    );
  }
}

// for loop
// for (var i = 0; i < gamePattern.length; i++) {
//   $("#" + gamePattern[i]).css("background-color", "black");
// }
