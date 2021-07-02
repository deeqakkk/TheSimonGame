// Creating Random Patterns 
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
}
// Selecting random selected buttons and adding properties to them
$("#"+randomChosenColour).fadeIn(100).fadeout(100).fadIn(100);
var audio=new audio("sounds/"+randomChosenColour+".mp3");
