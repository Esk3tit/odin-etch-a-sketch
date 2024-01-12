function generateGrid(n) {
    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < n; j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            column.style.backgroundColor = 'white';
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

function darken(e) {
    if (e.target.classList.contains('column')) {
        const currentColor = e.target.style.backgroundColor;

        if (currentColor === 'black' || currentColor === 'rgb(0, 0, 0)') {
            return;
        }

        const rgbColor = currentColor === 'white' ? ['255', '255', '255'] : currentColor.match(/\d+/g);
        const [r, g, b] = rgbColor.map(color => Number(color));

        const newR = Math.max(0, Math.floor(r - 25.5));
        const newG = Math.max(0, Math.floor(g - 25.5));
        const newB = Math.max(0, Math.floor(b - 25.5));

        e.target.style.backgroundColor = `rgb(${newR}, ${newG}, ${newB})` === `rgb(0, 0, 0)` ? 'black' : `rgb(${newR}, ${newG}, ${newB})`;
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
const darkenBtn = document.querySelector('#darken-btn');

rainbowBtn.addEventListener('click', function() {
    document.querySelector('.container').removeEventListener('mouseover', fillBlack);
    document.querySelector('.container').removeEventListener('mouseover', darken);
    document.querySelector('.container').addEventListener('mouseover', fillRandomColor);
});

blackBtn.addEventListener('click', function() {
    document.querySelector('.container').removeEventListener('mouseover', fillRandomColor);
    document.querySelector('.container').removeEventListener('mouseover', darken);
    document.querySelector('.container').addEventListener('mouseover', fillBlack);
});

darkenBtn.addEventListener('click', function() {
    document.querySelector('.container').removeEventListener('mouseover', fillRandomColor);
    document.querySelector('.container').removeEventListener('mouseover', fillBlack);
    document.querySelector('.container').addEventListener('mouseover', darken);
});