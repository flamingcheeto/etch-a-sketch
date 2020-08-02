function createGrid(containerID, size) {

    let container = document.querySelector(`#${containerID}`);
    container.style.cssText = 'grid-template-columns: repeat(size, 1fr); grid-template-rows: repeat(size, 1fr)'

    for (let i = 1; i < size; i++) {
        let column = document.createElement('div');
        column.style.cssText = `grid-column: ${i} / ${i + 1}; grid-row: 1 / ${size + 1}`;
        column.classList.add("gridColumn");
        container.appendChild(column);

        let row = document.createElement('div');
        row.style.cssText = `grid-row: ${i} / ${i + 1}; grid-column: 1 / ${size + 1}`;
        row.classList.add("gridRow");
        container.appendChild(row);
    }
}

createGrid('gridContainer', 4);

