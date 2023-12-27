document.addEventListener('DOMContentLoaded', function () {
//containers gets everything with class image-container
  const containers = document.querySelectorAll('.image-container');

// for each element in containers
  containers.forEach(function (container) {
    const video = container.querySelector('.video');

// pauses video durin load at time 0
    video.pause();
    video.currentTime = 0;

    // Play the video on hover
    container.addEventListener('mouseenter', function () {
      video.play();// plays video
    });

    // Pause the video and reset on mouse leave
    container.addEventListener('mouseleave', function () {
      video.pause();
      video.currentTime = 0; // Reset video to the beginning

    });
  });
});

    var buttons = document.querySelectorAll(".animal")// event listener for clicking animal buttons
    for(var i=0;i<buttons.length;i++){
      buttons[i].addEventListener('click',function(){
        var buttonInnerHtml =this.querySelector(".text").innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
      })
    }
    var buttonsTools = document.querySelectorAll(".tool")// event listener for clicking tool buttons
    for(var i=0;i<buttons.length;i++){
      buttonsTools[i].addEventListener('click',function(){
        var buttonInnerHtmlTools =this.querySelector(".text").innerHTML;
        makeSound(buttonInnerHtmlTools);
        buttonAnimation(buttonInnerHtmlTools);
      })
    }
    document.addEventListener("keypress",function(event){// event listener for pressing keyboard
      makeSound(event.key);
      buttonAnimation2(event.key);
  })
  
    var currentAudio;
    function makeSound(key) {
     if(currentAudio){
      currentAudio.pause();
     }
      switch (key) {
          case 'q':
             currentAudio = new Audio("sounds/dog-barking.mp3");
           break;
           case 'w':
             currentAudio = new Audio("sounds/tiger-roar.mp3");
           break;
           case 'e':
             currentAudio = new Audio("sounds/bird-chirp.mp3");
           break;
           case 'r':
             currentAudio = new Audio("sounds/monkey-scream.mp3");
           break;
           case 'a':
             currentAudio = new Audio("sounds/hammer-sound.mp3");
           break;
           case 's':
             currentAudio = new Audio("sounds/shovel-sound.mp3");
           break;
           case 'd':
             currentAudio = new Audio("sounds/screwdriver-sound.mp3");
           break;
           case 'f':
             currentAudio = new Audio("sounds/drill-sound.mp3");
           break;
          default:
              alert("No such book!");
              return; // exit the function if the key is not recognized
      }
    
      // change volume and play
      currentAudio.volume=0.1;
      currentAudio.play();
    }
  function buttonAnimation(currentKey){ //gets key that was clicked
    var activeButton=document.querySelector("."+currentKey); //gets the key
    activeButton.classList.add("pressed"); //will add a class of "pressed" to the pressed button
    setTimeout(function(){activeButton.classList.remove("pressed");},250); //remove pressed after some time
}
// same as other but more time for when it is the key is pressed
function buttonAnimation2(currentKey){ 
  var activeButton=document.querySelector("."+currentKey); 
  activeButton.classList.add("pressed"); 
  setTimeout(function(){activeButton.classList.remove("pressed");},750); 
}
