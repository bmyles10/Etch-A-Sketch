/*
Need to create this to only start when you choose a button. I hated that you started the app and it just started making markings

*/

let container = document.querySelector("#container");

let createGrid = (squaresPerSide) => {
    for (i = 0; i < squaresPerSide * squaresPerSide; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = (750 / squaresPerSide - 2).toString() + 'px';
        square.style.height = (750 / squaresPerSide - 2).toString() + 'px';
        container.appendChild(square);

    }
}
//Creating a Random Color Function
let getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



//Function to change squares black
let changeToBlack = (event) => {
    if (event.target !== event.currentTarget) {
        event.target.style.background = 'black';
    }
    event.stopPropagation();
}
//Function to change squares rainbow colors
let changetoRainbow = (event) => {
    if (event.target !== event.currentTarget) {
        event.target.style.background = getRandomColor();
    }
    event.stopPropagation();
}

//Function to change squares white
let changetoWhite = (event) => {
    if (event.target !== event.currentTarget) {
        event.target.style.background = 'white';
    }
    event.stopPropagation();
}



//Function to reload page
let reloadWindow = () => {
    location.reload();
}


//Rainbow Color Event
let colored = () => {
    container.addEventListener("mouseover", changetoRainbow);

}

//Black Color Event
let blacked = () => {
    container.addEventListener("mouseover", changeToBlack);
}

//Eraser Event
let eraser = () => {
    container.addEventListener("mouseover", changetoWhite);
}



//Create button to restart, this should refresh the page entirely
let reset = () => {
    let button1 = document.createElement("button");
    button1.textContent = "Reset";
    let btn = document.getElementById("btn1");
    btn.appendChild(button1)
    button1.addEventListener("click", reloadWindow);
    createGrid(16);
}

//Create button to do colors / Should remove this button and the black one after click
let rainbowSketch = () => {
    let button = document.createElement("button");
    button.textContent = "Rainbow Colors";
    let btn = document.getElementById("btn")
    btn.appendChild(button);
    button.addEventListener("click", colored);
    createGrid(16); //Will need to change the argument to a varible that ask user how many cells to use.

}

//Create button to do just black / Should remove this button and the color one after click
let blackSketch = () => {
    let button2 = document.createElement("button");
    button2.textContent = "Regular Black";
    let btn2 = document.getElementById("btn2")
    btn2.appendChild(button2);
    button2.addEventListener("click", blacked);
    createGrid(16); //Will need to change the argument to a varible that ask user how many cells to use.
}

//Create Eraser
let erase = () => {
    let button = document.createElement("button");
    button.textContent = "Eraser";
    let btn = document.getElementById("btn3");
    btn.appendChild(button);
    button.addEventListener("click", eraser);
    createGrid(16); //Will need to change the argument to a varible that ask user how many cells to use.
}



rainbowSketch();
blackSketch();
reset();
erase();