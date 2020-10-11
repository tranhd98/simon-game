


var colorSet = ['green', 'red', 'yellow', 'blue'];
var colorSetComp = [];
var humanChoose = [];
var randomChoose = 0;
var level = 1;
// set animation and sound for buttons

$(document).on("keydown", function(e) {
  if (e.which == 65) {
    $("h1").text("level " + level);
    randomChoose = Math.floor(Math.random() * 3) + 1;
    colorSetComp.push(colorSet[randomChoose]);
    var idColor = '#' + colorSet[randomChoose];
    addMusic(colorSet[randomChoose]);
    $(idColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    $(document).off('keyup keydown keypress');
  }
});
var check = 0;
var locked = false;
$(".btn").on("click", function() {
  var color = $(this).attr('id');
  makeAnimation(this);
  humanChoose.push(color);
  console.log("human choose " + humanChoose + " computer choose " + colorSetComp[humanChoose.length - 1]);
  if (humanChoose[humanChoose.length - 1] === colorSetComp[humanChoose.length - 1]) {
    if(humanChoose.length === colorSetComp.length){
      level++;
      setTimeout(function(){
        humanChoose = [];
        randomChoose = Math.floor(Math.random() * 3) + 1;
        colorSetComp.push(colorSet[randomChoose]);
        var idColor = '#' + colorSet[randomChoose];
        addMusic(colorSet[randomChoose]);
        $("h1").text("level " + level);
        $(idColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      }, 1000);
    }
  }
  else {
    colorSetComp = [];
    humanChoose = [];
    level = 1;
    addMusic("wrong");
    $("h1").text("Game over. Please enter any key to restart:");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },100);
    $(document).off('keyup keydown keypress');
    $(document).on("keydown", function(e) {
      $("h1").text("level " + level);
      console.log("computer choose " + colorSetComp + " human guess " + humanChoose);
      $(document).off('keyup keydown keypress');
      randomChoose = Math.floor(Math.random() * 3) + 1;
      colorSetComp.push(colorSet[randomChoose]);
      var idColor = '#' + colorSet[randomChoose];
      addMusic(colorSet[randomChoose]);
      $(idColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    });
  }
});


function makeAnimation(button) {
  $(button).addClass("pressed");
  setTimeout(function() {
    $(button).removeClass("pressed");
  }, 100);
}

function addMusic(colorChoose) {
  switch (colorChoose) {
    case "blue":
      var audio = new Audio("sounds/blue.mp3");
      audio.play();
      break;
    case "green":
      var audio = new Audio("sounds/green.mp3");
      audio.play();
      break;
    case "red":
      var audio = new Audio("sounds/red.mp3");
      audio.play();
      break;
    case "yellow":
      var audio = new Audio("sounds/yellow.mp3");
      audio.play();
      break;
    default:
      var audio = new Audio("sounds/wrong.mp3");
      audio.play();
  }
}
