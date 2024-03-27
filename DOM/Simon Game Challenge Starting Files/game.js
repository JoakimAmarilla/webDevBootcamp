var greenSound = new Audio("sounds/green.mp3");
var redSound = new Audio("sounds/red.mp3");
var yellowSound = new Audio("sounds/yellow.mp3");
var blueSound = new Audio("sounds/blue.mp3");

const  buttonColours = ["green","red","yellow","blue","justInCase"];

var userClickedPattern = [];
var randomColours = [];
var i = 0;


$(document).keypress(function(event) {

    if(event){
        console.log("in the keypress")
        randomColours = [];
         i = 0;
        $("h1").text("Level: " + i);

        i = nextSequence2(i);
        console.log(event.key)
    }
})

            

$(".btn").off("click").on("click", function() {

    console.log("in the clickListener")
    
    userClickedPattern.push(this.id);

    animationButtons(this.id)
    playSound(this.id);
        
    console.log("listener:" + userClickedPattern.join(', '));

    checkAnswer(i);
        
});
            
        

/*
el juego no se reinicia al presionar un boton, ni continua

$("h1").text(randomColoursFromFunction[0]); //Quitar esto antes de mandar a produccion

animationAndSoundForButtons(randomColoursFromFunction[0]) //Quitar
*/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function nextSequence2(i) {
    userClickedPattern = [];
    $("h1").text("Level: " + i);
    await sleep(1000);
    randomColours.push(buttonColours[Math.floor( Math.random() * 4 )]);
    animationButtons(randomColours[i]);
    $("#" + randomColours[i]).fadeIn(100).fadeOut(100).fadeIn(100);

    //playSound(randomColours[i]);

    i++;
    console.log("sequence: " + randomColours.join(', '));

    return i;
}

function animationForButtons(id){
    $(id).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}

// hasta aqui todo ok



function animationButtons(id){
    $("#" + id).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}

function playSound(id){
    switch(id){
        case "green":
            greenSound.play();
            break
        case "red":
            redSound.play();
            break;
        case "yellow":
            yellowSound.play();
            break;
        case "blue":
            blueSound.play();
            break;
         default:
            alert("sound Fail");
            break;
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function checkAnswer(currentLevel) {

    if (randomColours[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === randomColours.length){
        setTimeout(function () {
          nextSequence2(i);
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
    }
}