
//Code below is how to create a grid - Look at https://zorafins.github.io/etch-a-sketch/

let container = document.querySelector("#container");

let createGrid = (squaresPerSide) => {
    for (i = 0; i < squaresPerSide * squaresPerSide; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = (750 / squaresPerSide - 2).toString() + 'px';
        square.style.height = (750 / squaresPerSide - 2).toString() + 'px';        
        container.appendChild(square);
        console.log(container);        
    }
}

let getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let changeToBlack = (event) => {
    if (event.target !== event.currentTarget) {
        event.target.style.background = 'black';
    }
    event.stopPropagation();
}

container.addEventListener("mouseover", changeToBlack);

//Should show grid with 16 rows and 16 columns
createGrid(16);
