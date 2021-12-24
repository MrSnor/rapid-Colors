
const box = document.querySelector(".box");

// function to get random values from 0 to 250
function rdNum() {
    return Math.round(Math.random() * 251)
}

// function to change background color
function coloChange() {
    this.style.backgroundColor = `rgb(${rdNum()},${rdNum()},${rdNum()})`;
}


// listening to mouse events
box.addEventListener('click',coloChange)
box.addEventListener('mouseenter',coloChange)
box.addEventListener('mouseleave',coloChange)

// listening to touch events
box.addEventListener("touchmove", coloChange);