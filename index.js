$(document).keypress(function () {
     $("h1").text("Level 1");
  
});

$(".green").click(function () {
    var audio = new Audio('sounds/green.mp3');
    audio.play();
});
$("#red").click(function () {
    var audio = new Audio('sounds/red.mp3');
    audio.play();
});
$("#yellow").click(function () {
    var audio = new Audio('sounds/yellow.mp3');
    audio.play();
     
});
$("#blue").click(function () {
    var audio = new Audio('sounds/blue.mp3');
    audio.play();
});
