const DEFAULT_COLOR = '#252424';
const BOARD_COLOR = '#f1f1f1';

const container = document.querySelector('.container');
const color = document.getElementById('color');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const sliderValue = document.getElementById('value');
const slider = document.getElementById('slider');


sliderValue.textContent = `${slider.value}x${slider.value}`;
slider.addEventListener("mouseup", (e) => {
    sliderValue.textContent = `${e.target.value}x${e.target.value}`;
})

function createBoard(w, h) {
    const board = document.createElement('div');
    board.className = "board";
    for (let i = 0; i < w; i++) {
      let row = document.createElement('div');
      row.className = 'row';
  
      for (let j = 0; j < h; j++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
  
        row.appendChild(cell);
      }
  
      board.appendChild(row);
    }
  
    return board;
  }

let board = createBoard(slider.value, slider.value);
container.appendChild(board);