
const gridContainer = document.querySelector('.grid-container');

let setRows = 16;

for (let i = 0; i < setRows; i++) {
    const row = document.createElement('div');
    row.classList.add('container');
    gridContainer.appendChild(row);
    for (let x = 0; x < setRows; x++) {
        const col = document.createElement('div');
        col.classList.add('cell');
        row.appendChild(col);
    }
}



const cells = document.querySelectorAll('.cell');


cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.setAttribute('style', 'background-color: #f4a688');
    })
})

const resetButton = document.querySelector('.resetButton');

resetButton.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.setAttribute('style', 'background-color: #b7d7e8');
    })
})

const sizeEight = document.querySelector('.eightCells');
const sizeTwelve = document.querySelector('.twelveCells');
const sizeSixteen = document.querySelector('.sixteenCells');

