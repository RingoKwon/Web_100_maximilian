var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}



// for loop
// for (var i = 0; i < gamePattern.length; i++) {
//   $("#" + gamePattern[i]).css("background-color", "black");
// }
