


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
    numCells = document.querySelectorAll('.cell');

    numCells.forEach((cell) => {
        cell.style.width = getCellWidth(numCells) + 'px';
        cell.style.height = getCellWidth(numCells) + 'px';
    })
}

// Clear Grid before generating new grid
function clearGrid() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.textContent = '';
}

// Draw Cell function when mouse hovers over cells
function drawCells(cellWidth, setColor) {
    // Declare cells variable in nodelist
    const cells = document.querySelectorAll('.cell');
    // Change color of cells when hovering
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            // Set color of cell when mouseover function is called
            cell.style.backgroundColor = setColor;
            cell.style.width = cellWidth + 'px';
            cell.style.height = cellWidth + 'px';
        })
    })
}


// Draw Rainbow Cell function
function drawRainbowCells(cellWidth, rainbowColors) {
    // Declare cells variable in nodelist
    const cells = document.querySelectorAll('.cell');
    // Change color of cells when hovering
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            // Set random color of cell when mouseover function is called
            let randElem = Math.floor(Math.random() * rainbowColors.length);
            let setColor = rainbowColors[randElem];
            cell.style.backgroundColor = setColor;
            cell.style.width = cellWidth + 'px';
            cell.style.height = cellWidth + 'px';
        })
    })
}

// Get cell width with global numCells variable set in generate grid
function getCellWidth(numCells) {
    let numRows = Math.sqrt(numCells.length);
    let cellWidth = (580 / numRows);
    return cellWidth;
}


// Declare reset button as variable
const resetButton = document.querySelector('.resetButton');
// Reset cell colors after reset button is clicked
resetButton.addEventListener('click', () => {
    clearGrid();
    generateGrid(setRows);
    drawCells(getCellWidth(numCells), setColor);
})




// Declare button variables for sizing
const sizeSixteen = document.querySelector('.sixteenCells');
const sizeThirtyTwo = document.querySelector('.thirtyTwoCells');
const sizeSixtyFour = document.querySelector('.sixtyFourCells');

sizeSixteen.addEventListener('click', () => {
    setRows = 16;
    clearGrid();
    generateGrid(setRows);
    drawCells(getCellWidth(numCells), setColor);
})

sizeThirtyTwo.addEventListener('click', () => {
    setRows = 32;
    clearGrid();
    generateGrid(setRows);
    drawCells(getCellWidth(numCells), setColor);
})

sizeSixtyFour.addEventListener('click', () => {
    setRows = 64;
    clearGrid();
    generateGrid(setRows);
    drawCells(getCellWidth(numCells), setColor);
})

const redButton = document.querySelector('.red');
const blueButton = document.querySelector('.blue');
const greenButton = document.querySelector('.green');
const rainbowButton = document.querySelector('.rainbow');


redButton.addEventListener('click', () => {
    setColor = '#E17F7F';
    drawCells(getCellWidth(numCells), setColor);
})

blueButton.addEventListener('click', () => {
    setColor = '#7593CE';
    drawCells(getCellWidth(numCells), setColor);
})

greenButton.addEventListener('click', () => {
    setColor = '#63BF97';
    drawCells(getCellWidth(numCells), setColor);
})

rainbowButton.addEventListener('click', () => {
    drawRainbowCells(getCellWidth(numCells), rainbowColors);
})

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function titleAnimation() {
    const title = document.querySelector('.title');
    titleText = 'Pixel-Art'
    titleList = titleText.split('');
    showText = ''
    for (let i = 0; i < titleList.length; i++) {
        await delay(200);
        showText += titleList[i];
        title.textContent = showText;
    }
}


numCells = document.querySelectorAll('.cell');


// Set Default size to 16x16 and default color
setRows = 16;
setColor = '#E5EAF5';
rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3']
titleAnimation();
generateGrid(setRows);
drawCells(getCellWidth(numCells), setColor);


