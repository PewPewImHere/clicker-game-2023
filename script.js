let punkti = 0;

let red = 0;
let green = 0;
let blue = 0;

let diameter = 200;

let clickerButton = document.getElementById("button");
let scoreDisplay = document.getElementById("score");

function OnButtonClick(){
    punkti += 1;
    scoreDisplay.innerHTML = punkti;
    
    red = getRandomInt(256);
    green = getRandomInt(256);
    blue = getRandomInt(256);

    let rgbCode = "rgb(" + red.toString() + "," + green.toString() + "," + blue.toString() + ")";
    clickerButton.style.backgroundColor = rgbCode;

    diameter -= 5;

    if(diameter <= 5){
        scoreDisplay.innerHTML = "You Won!"
    }

    clickerButton.style.width = diameter.toString() + "px";
    clickerButton.style.height = diameter.toString() + "px";

}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

// UZDEVUMS 1
// Kad klikšķina uz pogu
// lai poga maina savu krāsu nejaušā veidā
// lai ir random krāsa