var audioCrash = new Audio('sounds/crash.mp3');
var audioKickBass = new Audio('sounds/Kick-Bass.mp3');
var audioSnare = new Audio('sounds/Snare.mp3');
var audioTom1 = new Audio('sounds/Tom-1.mp3');
var audioTom2 = new Audio('sounds/Tom-2.mp3');
var audioTom3 = new Audio('sounds/Tom-3.mp3');
var audioTom4 = new Audio('sounds/Tom-4.mp3');

var numberDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var btnInHTML = this.innerHTML

        switch(btnInHTML){
            case "w": audioTom1.play()
                break;
            case "a":audioTom2.play()
                break;
            case "s":audioTom3.play()
                break;
            case "d":audioTom4.play()
                break;
            case "j":audioSnare.play()
                break;
            case "k":audioCrash.play()
                break;
            case "l":audioKickBass.play()
                break;
            
        }

        buttonAnimation(btnInHTML)

    });

    document.addEventListener("keydown", function (event) {

        switch(event.key){
            case "w": audioTom1.play()
                break;
            case "a":audioTom2.play()
                break;
            case "s":audioTom3.play()
                break;
            case "d":audioTom4.play()
                break;
            case "j":audioSnare.play()
                break;
            case "k":audioCrash.play()
                break;
            case "l":audioKickBass.play()
                break;
            
        }

        buttonAnimation(event.key)

    });


    
};

    function buttonAnimation(currentKey){
        var activeButton = document.querySelector("." + currentKey);
        
        activeButton.classList.add("pressed");
        setTimeout(function(){activeButton.classList.remove("pressed")}, 2000);
        
    }