// Global variables

const container = document.querySelector('#container');
const newgrid = document.querySelector('#newgrid')

// Create a new grid

function createGrid(squaresPerSide) {
  for (i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = (750 / squaresPerSide - 2).toString() + 'px';
    square.style.height = (750 / squaresPerSide - 2).toString() + 'px';
    container.appendChild(square);
  }
}

// Event listener for button

newgrid.addEventListener("click", function(){
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  let squaresPerSide = prompt("How many squares would you like on each side?", "16");
  createGrid(squaresPerSide);
})

// Event Listener for each div 

container.addEventListener("mouseover", function(e){
  if (e.target !== e.currentTarget) {
    e.target.style.background = 'black';
  }
  e.stopPropagation();
})

// Initial 16x16 grid

createGrid(16);