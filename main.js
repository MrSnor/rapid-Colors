
alert("Flashing lights WARNING!!\n\nPLEASE DONT enter if you have trouble with FLASHING LIGHTS")
alert("Instruction: \n\n(On mobile devices) Tap and swipe the screen to change the colors \n\n(On computers) Click or move the cursor")

// function to get random values from 0 to 250
function rdnum() {
    const roundRandNum = Math.floor(Math.random() * 251)
    return roundRandNum
}

// function to change background color
function coloChange(e) {
    document.body.style.backgroundColor = `rgb(${rdnum()},${rdnum()},${rdnum()})`;
}

// listening to cursor events
document.body.addEventListener("mousemove", coloChange);
document.body.addEventListener("click", coloChange);

// listening to touch events
document.body.addEventListener("touchmove", coloChange);
