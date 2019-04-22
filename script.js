const grid = document.getElementById('grid');

function createGrid(x) {
    grid.style.gridTemplateColumns = `repeat(${x}, auto)`;
    grid.style.gridTemplateRows = `repeat(${x}, auto)`;

    for (let i = 0; i < x; i++) {
        for (let j =0; j < x; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        grid.appendChild(cell);
        }
    }
}

function removeGrid() {
    while(grid.firstChild) {
        grid.firstChild.remove();
    }
}

function newGrid() {
    removeGrid();
    const x = prompt('How many squares per side?')
    createGrid(x);
}

function paint(e) {
    if(e.target.className != 'cell') return;
    e.target.style.backgroundColor = 'blue';
}

document.getElementById('button').addEventListener("click", newGrid);
document.addEventListener('mouseover', paint);
createGrid(16);