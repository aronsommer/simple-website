// Show section 1
function show1() {
    document.getElementById("overlay1").style.display = "block";
    document.getElementById("overlay1").scrollTop = 0;
}

// Show section 2
function show2() {
    switchToCloseCursor();
    document.getElementById("overlay2").style.display = "block";
    document.getElementById("overlay2").scrollTop = 0;
}

// Show section 3
function show3() {
    document.getElementById("overlay3").style.display = "block";
    document.getElementById("overlay3").scrollTop = 0;
}

// Show section 4
function show4() {
    document.getElementById("overlay4").style.display = "block";
    document.getElementById("overlay4").scrollTop = 0;
}

// Hide all
function hideAll() {
    document.body.style.cursor = "default";
    document.getElementById("overlay1").style.display = "none";
    document.getElementById("overlay2").style.display = "none";
    document.getElementById("overlay3").style.display = "none";
    document.getElementById("overlay4").style.display = "none";
    changeBgColor();
}

// Switch cursor to close style
function switchToCloseCursor() {
    document.body.style.cursor = "url('images/cursor-cross-black.png')16 0, pointer";
}

// Change background color
var i = 0;
function changeBgColor() {
    var myColorArray = ['#FFFFCC', '#FFCCFF', '#CCE6FF', '#CCFFCC'];
    var arrayLength = myColorArray.length;
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