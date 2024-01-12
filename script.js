function generateGrid(n) {
    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < n; j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }
        document.querySelector('.container').appendChild(row);
    }
}

generateGrid(16);

document.querySelector('.container').addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('column')) {
        e.target.classList.add('hover');
    }
});

const newGridBtn = document.querySelector('#new-grid-btn');

newGridBtn.addEventListener('click', function() {
    let newGridSize;
    do {
        newGridSize = prompt('Enter new grid size (1 - 100):');
    } while (isNaN(newGridSize) || Number(newGridSize) < 1 || Number(newGridSize) > 100);
    newGridSize = Number(newGridSize);

    const rows = document.querySelectorAll('.row');
    rows.forEach(row => row.remove());

    generateGrid(newGridSize);
});