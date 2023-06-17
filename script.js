const DEFAULT_COLOR = '#252424';
const BOARD_COLOR = '#f1f1f1';
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'color';

let currentMode = DEFAULT_MODE;

const container = document.querySelector('.container');
const board = document.querySelector('.board');
const color = document.getElementById('color');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const sliderValue = document.getElementById('value');
const slider = document.getElementById('slider');

// could have used the onclick instead of addEventListener
color.addEventListener("click", () => {
    setColorMode(DEFAULT_MODE);
})
rainbow.addEventListener("click", () => {
    setColorMode('rainbow');
})
eraser.addEventListener("click", () => {
    setColorMode('eraser');
})
clear.addEventListener("click", () => {
    clearBoard(slider.value);
})
slider.addEventListener("mouseup", (e) => {
    updateSlideValue(e.target.value)
})
slider.addEventListener("change", (e) => {
    changeSize(e.target.value)
})

// the rows and columns of the board is defined by the grid property
function createBoard(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size*size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener("mouseenter", changeDivColor)
        cell.addEventListener("mouseleave", changeDivColor)
        board.appendChild(cell);
      }
  }
// change the color of the cells in the board once the mouse hovers over them
// e.target applies to cell in the createBoard() function
function changeDivColor(e){
    if (e.type === 'mouseenter') return; 
    if (currentMode === 'rainbow'){
        rndR = Math.floor(Math.random()*256);
        rndG = Math.floor(Math.random()*256);
        rndB = Math.floor(Math.random()*256);
        e.target.style.backgroundColor = `rgb(${rndR}, ${rndG}, ${rndB})`;
    }
    else if (currentMode === 'eraser'){
        e.target.style.backgroundColor = BOARD_COLOR;
    }
    else if (currentMode === 'color'){
        e.target.style.backgroundColor = DEFAULT_COLOR;
    }
}

function updateSlideValue(value){
    sliderValue.textContent = `${value}x${value}`;
}
// once the user resize the board, it will default the current mode to DEFAULT_MODE
// which avoids the confusion if the user is currently in eraser mode when he try to draw again
function changeSize(size){
    clearBoard(size);
    updateSlideValue(size);
    setColorMode(DEFAULT_MODE);
}
// clears the board and reset it so that a new session could begin
function clearBoard(size){
    board.textContent = '';
    createBoard(size);
}

function setColorMode(mode){
    currentMode = mode;
}

window.onload = () =>{
    createBoard(DEFAULT_SIZE);
    updateSlideValue(slider.value);
    setColorMode(DEFAULT_MODE);
}


