//alert('works');

var buttonColours =['red','blue','green','yellow'];
var gamePattern =[];
var userClickedPattern =[];
              
let started = false;
var level = 0;

$(document).keypress(function() {
    if(!started) {
        $('#level-title').text('Level ' + level);
        nextSequence();
        started = true;
    }
});


function playSound(name) {
    var sounds = new Audio('./sounds/'+name+'.mp3')
    sounds.play();
}

$('.btn').click( function() {
    var userChosenColour = $(this).attr('id');
    //console.log('user chosen color is: '+userChosenColour);
    userClickedPattern.push(userChosenColour);                                    
    $('#'+userChosenColour).fadeToggle(100).fadeIn(100);
    playSound(userChosenColour);
    checkAsnwer(userClickedPattern.length-1);
});



function nextSequence () {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    level ++;
    $('#level-title').text('Level ' + level);
    gamePattern.push(randomChosenColour);
    console.log(randomNumber);  
    console.log(gamePattern);
    $('#'+randomChosenColour).fadeToggle(100).fadeIn(100);
    playSound(randomChosenColour);
    

}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
      }, 100);

}

function checkAsnwer (currentLevel) {
   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log('succes');
    if( gamePattern.length === userClickedPattern.length) {
        setTimeout(function () {
            nextSequence();
            userClickedPattern = [];
          }, 1000);
    }

   } else {
    var wrongChoice = new Audio('./sounds/wrong.mp3')
    wrongChoice.play();
    $('body').addClass('game-over');
    setTimeout(function() {
        $('body').removeClass('game-over');
    },200);
    $('h1').text('Game Over, Press Any Key to Restart');
    startOver();
   }

}

function startOver() {
    userClickedPattern =[];
    gamePattern =[];
    level = 0;
    started = false;
}





