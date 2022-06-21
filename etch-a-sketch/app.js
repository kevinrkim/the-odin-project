const canvas = document.querySelector('.container');

for (i = 0; i < 256; i++) {
  let div = document.createElement('div');
  div.setAttribute('class', 'grid-square');
  canvas.appendChild(div);
}

const gridSquare = document.querySelectorAll('.grid-square');

gridSquare.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.classList.add('colored');
  });
});