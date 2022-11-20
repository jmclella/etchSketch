
const gridContainer = document.querySelector('.grid-container');

// Set rows within grid
let setRows = 16;

// Function creates 16 rows, 16 columns and appends divs within container
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


// Change color of cells when hovering
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        // Set color of cell when mouseover function is called
        cell.setAttribute('style', 'background-color: #622569');
    })
})

const resetButton = document.querySelector('.resetButton');

// Reset cell colors after reset button is clicked
resetButton.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.setAttribute('style', 'background-color: #b7d7e8');
    })
})

const sizeEight = document.querySelector('.eightCells');
const sizeTwelve = document.querySelector('.twelveCells');
const sizeSixteen = document.querySelector('.sixteenCells');

