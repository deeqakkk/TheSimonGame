// Creating Random Patterns 
var buttonColours = ["red", "blue", "green", "yellow"];
//To record generated pattern
var gamePattern = [];
//To record user clicked pattern
var userClickPattern = [];


//Function to create a random pattern && playing sounds also
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeout(100).fadIn(100);
    playSound(randomChosenColour);
}

//Function to store user clicked pattern  & playing sounds also
$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickPattern.push(userChosenColor);
    playSound(userChosenColor);
})


//Function to play sound 
function playSound(name){
    var audio = new audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

// Function to add pressed effect
function animatePress(color){
    $("#"+color).addClass("pressed");

    setTimeout(function(){
        $("#"+color).removeClass("pressed");
    },100);
}




