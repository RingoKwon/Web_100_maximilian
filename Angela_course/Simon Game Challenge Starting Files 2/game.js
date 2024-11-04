var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

$(".btn").on("click", function () {
  var clickedElement = $(this);
  var btnId = clickedElement.attr("id");
  userClickPattern.push(btnId);
  playSound(btnId);
  animatePress(btnId);
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

// for loop
// for (var i = 0; i < gamePattern.length; i++) {
//   $("#" + gamePattern[i]).css("background-color", "black");
// }
