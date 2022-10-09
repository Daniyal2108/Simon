
function buttonClick(button) {
    switch(button) {
        case 'green':
            var greenSound = new Audio("sounds/green.mp3");
            greenSound.play();
            $("#" + button).addClass("pressed");
            setTimeout( function() {
                $("#" + button).removeClass("pressed");
            }, 100 )
            break;

        case 'red':
            var redSound = new Audio("sounds/red.mp3");
            redSound.play();
            $("#" + button).addClass("pressed");
            setTimeout( function() {
                $("#" + button).removeClass("pressed");
            }, 100 )
            break;

        case 'yellow':
            var yellowSound = new Audio("sounds/yellow.mp3");
            yellowSound.play();
            $("#" + button).addClass("pressed");
            setTimeout( function() {
                $("#" + button).removeClass("pressed");
            }, 100 )
            break;

        case 'blue':
            var blueSound = new Audio("sounds/blue.mp3");
            blueSound.play();
            $("#" + button).addClass("pressed");
            setTimeout( function() {
                $("#" + button).removeClass("pressed");
            }, 100 )
            break;

        default:
            console.log("Anything doing wrong!");
    }
}


$(document).keypress(function() {

    randomColor();

});

var num = 1;
var executed = false;
var randomPlay = [];
function randomColor() {

    
    if(!executed) {
        executed = true;

        $("h1").text("Level " + num); // Title

        var buttons = $(".btn");
        
        var randomButton = Math.floor((Math.random() * buttons.length) );
        
        var randomButtonId = buttons[randomButton].id;

        buttonClick(randomButtonId);

        randomPlay.push(randomButtonId);

    }

}


var clickedButtons = [];
$(".btn").click(function() {
    
    var clickedButtonId = this.id;

    // Buttons List.....
    clickedButtons.push(clickedButtonId);

    balanceBothLists();
    
});

function balanceBothLists() {
    
    if(clickedButtons.length === randomPlay.length) {
        playGame();
    } 
}


function playGame() {


    if(JSON.stringify(clickedButtons) === JSON.stringify(randomPlay) && clickedButtons.join() === randomPlay.join() ) {
        // executed = false;
         
 
     
         num++;
         //randomColor();
 
         // for(var i = 0; i < num; i++) {
         //     executed = false;
         //     randomColor();
             
         //     i;
         // }
         
         // LOOP FUNCTION...
 
         
 
         var i = 0;
         randomPlay = [];
         clickedButtons = [];
         function myLoop() {
             setTimeout( function() {
                executed = false;
                randomColor();
                i++;
                
                if(i < num) {
                 
                 myLoop();
                
                 }
 
                
 
             }, 1000 )
             
         }
 
        myLoop();
         
    } else {
         executed = false;
         num = 1;
         randomPlay = [];
         clickedButtons = [];
         var wrong = new Audio("sounds/wrong.mp3");
         wrong.play();
         $("h1").text("Game Over, Press Any Key to Restart");
         $("body").addClass("game-over");
         
         setTimeout( function() {
             $("body").removeClass("game-over");
         }, 100 )
 
    }    

}