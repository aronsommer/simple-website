let oneSectionIsShowing = false;

// Show section
function showSection(number) {
    document.getElementById("overlay" + number).style.display = "block";
    document.getElementById("overlay" + number).scrollTop = 0;
    oneSectionIsShowing = true;
}

// Hide all sections
function hideAllSections() {
    let overlayArray = document.getElementsByClassName("overlay");
    for (let index = 0; index < overlayArray.length; index++) {
        overlayArray[index].style.display = 'none';
    }
    oneSectionIsShowing = false;
}

// Detect escape key press to hide all sections
document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape' && oneSectionIsShowing) {
        hideAllSections();
        switchToDefaultCursor();
        changeBgColor()
    }
});

// Switch cursor to close style
function switchToCloseCursor() {
    document.body.style.cursor = "url('images/cursor-cross-black.png')16 0, pointer";
}

// Switch cursor to default style
function switchToDefaultCursor() {
    document.body.style.cursor = "default";
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