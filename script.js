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

// Add hover effect so that when mouse passes over div, it changes color
// Use event delegation to add event listener to container, then use if statement to check if target is a column
// to prevent event listener from firing when mouse passes over row and not having event listeners for every column
// which would be inefficient
document.querySelector('.container').addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('column')) {
        e.target.classList.add('hover');
    }
});