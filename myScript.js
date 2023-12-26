// Show section
function show(number) {
    document.getElementById("overlay" + number).style.display = "block";
    document.getElementById("overlay" + number).scrollTop = 0;
}

// Hide all overlays
function hideAll() {
    changeBgColor();
    document.body.style.cursor = "default";
    let overlayArray = document.getElementsByClassName("overlay");
    for (let index = 0; index < overlayArray.length; index++) {
        overlayArray[index].style.display = 'none';
    }
}

// Switch cursor to close style
function switchToCloseCursor() {
    document.body.style.cursor = "url('images/cursor-cross-black.png')16 0, pointer";
}

// Change background color
let i = 0;
function changeBgColor() {
    let myColorArray = ['#FFFFCC', '#FFCCFF', '#CCE6FF', '#CCFFCC'];
    document.body.style.backgroundColor = myColorArray[i];
    i++;
    if (i >= myColorArray.length) {
        i = 0;
    }
}

// Body onload function
function startFunction() {
    // Do stuff
}