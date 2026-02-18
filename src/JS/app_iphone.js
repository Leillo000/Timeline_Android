const group = document.getElementById("group");

/* La cantidad de pixeles que se va a mover */
const movement = 90;
const ini_position = window.getComputedStyle(group);
let currentMargin = parseInt(ini_position.marginLeft);

function moveRight() {
    if (currentMargin < 180) {
        currentMargin += movement;
        group.style.marginLeft = currentMargin + "px";
    }
}

function moveLeft() {
    if (currentMargin > -270){
        currentMargin -= movement;
        group.style.marginLeft = currentMargin + "px";
    }
}