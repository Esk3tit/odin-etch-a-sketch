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

function generateRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function fillBlack(e) {
    if (e.target.classList.contains('column')) {
        e.target.style.backgroundColor = 'black';
    }
}

function fillRandomColor(e) {
    if (e.target.classList.contains('column')) {
        e.target.style.backgroundColor = generateRGB();
    }
}

generateGrid(16);

document.querySelector('.container').addEventListener('mouseover', fillBlack);

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

// If we select the 'rainbow' button, we want to change the fillBlack function to fill the div with a random color
// if we select black then remove old event listener and add fillBlack back in
const rainbowBtn = document.querySelector('#rainbow-btn');
const blackBtn = document.querySelector('#black-btn');

rainbowBtn.addEventListener('click', function() {
    document.querySelector('.container').removeEventListener('mouseover', fillBlack);
    document.querySelector('.container').addEventListener('mouseover', fillRandomColor);
});

blackBtn.addEventListener('click', function() {
    document.querySelector('.container').removeEventListener('mouseover', fillRandomColor);
    document.querySelector('.container').addEventListener('mouseover', fillBlack);
});