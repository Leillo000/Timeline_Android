const group = document.getElementById("group");

/* La cantidad de pixeles que se va a mover */
const movement = 50;
const ini_position = window.getComputedStyle(group);
let currentMargin = parseInt(ini_position.marginLeft);

function moveRight() {
    if (currentMargin < 0) {
        currentMargin += movement;
        group.style.marginLeft = currentMargin + "px";
        console.log(currentMargin);
    }
}

function moveLeft() {
    currentMargin -= movement;
    group.style.marginLeft = currentMargin + "px";
    console.log(currentMargin);
}