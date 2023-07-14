var a =prompt("enter a no.");
alert(a);

//Taking button reference
var btn = document.getElementsByClassName("drum");

//using for loop to add event and event handler on mouse click
for (var i = 0; i < 7; i++) {
    btn[i].addEventListener('click', function () {
        makeSound(this.innerHTML);
        buttonclick(this.innerHTML)
    });
}

//  add event and event handler on keypress
document.addEventListener("keypress", function (event) { makeSound(event.key); buttonclick(event.key) })

//  highlight the clicked or press button
function buttonclick(currentkey) {
    document.querySelector("." + currentkey).classList.add("pressed");
    setTimeout(function () { document.querySelector("." + currentkey).classList.remove("pressed"); }, 100)
}
//declaring make sound function
var makeSound = (currentkey) => {

    switch (currentkey) {
        case "w": var audio = new Audio("Audio/crash.mp3");
            audio.play();
            break;

        case "a": var audio = new Audio("Audio/kick-bass.mp3");
            audio.play();
            break;

        case "s": var audio = new Audio("Audio/snare.mp3");
            audio.play();
            break;

        case "d": var audio = new Audio("Audio/tom-1.mp3");
            audio.play();
            break;

        case "j": var audio = new Audio("Audio/tom-2.mp3");
            audio.play();
            break;

        case "k": var audio = new Audio("Audio/tom-2.mp3");
            audio.play();
            break;

        case "l": var audio = new Audio("Audio/tom-4.mp3");
            audio.play();
            break;
        default: alert("you press the wrong key");
    }

}
