var gamePattern = [];
var randomNumber = nextSequence();
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomN = Math.floor(Math.random() * 4);
  return randomN;
}

randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour); 


