var popUpDiv;
var fadebackground;
var popUpButton;
var exit;


window.onload = function () {
    popUpButton = document.getElementsByClassName("buttonclass");
    popUpDiv = document.getElementsByClassName("popupdivs");
    fadebackground = document.getElementById("fadebackground")
    exit = document.getElementsByClassName("exitbutton");   

    for (var i = 0; i < popUpButton.length; i++) {
        popUpButton[i].onclick = function () {
            fadebackground.style.display = "block";
            popUpBox(this);  
        }
    }
}

function popUpBox(boxToActivate) {
    for (var i = 0; i < popUpButton.length; i++) {
        if (popUpButton[i] == boxToActivate) {
            popUpDiv[i].classList.add("activate");
            popUpDiv[i].style.display = "block";
            exit[i].onclick = function () {
                console.log("exit clicked");
                console.log(popUpDiv[i]);
                exitPopUpBox(popUpDiv[i]);
            }
            break;
        } else {
            popUpDiv[i].style.display = "none";
        }
    }

    
}

function exitPopUpBox(boxToExit) {
    fadebackground.style.display = "none";
        boxToExit.style.display = "none";
        boxToExit.classList.remove("activate");
    }