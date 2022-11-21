


// Set rows within grid
// let setRows = 16;

// Function creates 16 rows, 16 columns and appends divs within container
function generateGrid(setRows) {
    const gridContainer = document.querySelector('.grid-container');
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
    drawCells();
}

// Clear Grid before generating new grid
function clearGrid() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.textContent = '';
}

function drawCells() {
    // Declare cells variable in nodelist
    const cells = document.querySelectorAll('.cell');
    // Change color of cells when hovering
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            // Set color of cell when mouseover function is called
            cell.setAttribute('style', 'background-color: #622569');
        })
    })
}


// Declare reset button as variable
const resetButton = document.querySelector('.resetButton');
// Reset cell colors after reset button is clicked
resetButton.addEventListener('click', () => {
    let numCells = document.querySelectorAll('.cell');
    let numRows = Math.sqrt(numCells.length);
    clearGrid()
    generateGrid(numRows);
})



const sizeEight = document.querySelector('.eightCells');
const sizeTwelve = document.querySelector('.twelveCells');
const sizeSixteen = document.querySelector('.sixteenCells');

sizeEight.addEventListener('click', () => {
    clearGrid();
    generateGrid(8);
})

sizeTwelve.addEventListener('click', () => {
    clearGrid();
    generateGrid(12);
})

sizeSixteen.addEventListener('click', () => {
    clearGrid();
    generateGrid(16);
})


generateGrid(16);