const canvas = document.querySelector('.container');
const gridSizeBtn = document.querySelector('#grid-size');
const randomizeBtn = document.querySelector('#randomize');

let randomizer = 0;

randomizeBtn.addEventListener('click', () => {
  randomizer = 1;
  colorize();
});

gridSizeBtn.addEventListener('click', (event) => {
  let gridSize = window.prompt('How many squares per side would you like the grid to be?');
  while (!parseInt(gridSize) || gridSize > 32 || gridSize < 1) {
    gridSize = window.prompt('Please enter a number between 1 and 32');
  }
  setGrid(gridSize);
  randomizeBtn.style.display = 'block';
});

const colorize = () => {
  if (randomizer == 0) {
    const gridSquare = document.querySelectorAll('.grid-square');
    gridSquare.forEach((square) => {
      square.addEventListener('mouseover', () => {
        square.classList.add('colored');
      });
    });
  } else {
    const gridSquare = document.querySelectorAll('.grid-square');
    gridSquare.forEach((square) => {
      square.addEventListener('mouseover', () => {
        let randomRgb = [];
        for (i = 0; i < 3; i++) { randomRgb.push(Math.round(Math.random() * 255)) }
        square.style.backgroundColor = `${randomRgb[0]}, ${randomRgb[1]}, ${randomRgb[2]}`;
      });
    });
  }
};

const decolorize = () => {
  const gridSquare = document.querySelectorAll('.grid-square');
  gridSquare.forEach((square) => {
    square.classList.remove('colored');
  });
};

const setGrid = (squares) => {
  decolorize();
  for (i = 0; i < Math.pow(squares, 2); i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'grid-square');
    canvas.appendChild(div);
    colorize();
  }
  canvas.style.gridTemplateColumns = `repeat(${squares}, ${560/squares}px)`;
  canvas.style.gridTemplateRows = `repeat(${squares}, ${560/squares}px)`;
  canvas.style.borderStyle = 'solid';
};
