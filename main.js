
alert("Flashing lights WARNING!!\n\n PLEASE DONT enter if have trouble with FLASHING LIGHTS")
alert("Only enter if you're sure")

function rdnum() {
    const roundRandNum = Math.floor(Math.random() * 251)
    return roundRandNum
}

function coloChange(e) {
    document.body.style.backgroundColor = `rgb(${rdnum()},${rdnum()},${rdnum()})`;
}

document.body.addEventListener("mousemove", coloChange);

document.body.addEventListener("touchmove", coloChange);