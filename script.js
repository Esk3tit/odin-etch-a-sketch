// Create 16 x 16 grid of divs using flex box, two loops, outer for rows, inner for columns
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++) {
        const column = document.createElement('div');
        column.classList.add('column');
        row.appendChild(column);
    }
    document.querySelector('.container').appendChild(row);
}