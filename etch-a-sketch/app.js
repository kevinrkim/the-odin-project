const canvas = document.querySelector('.container');

for (i = 0; i < 16; i++) {
  let div = document.createElement('div');
  div.setAttribute('class', 'grid-square');
  canvas.appendChild(div);
}
