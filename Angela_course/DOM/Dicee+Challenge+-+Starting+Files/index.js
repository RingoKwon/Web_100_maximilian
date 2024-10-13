// Generate a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randommDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randommDiceImage;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2)
