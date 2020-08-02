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

    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            let div = document.createElement('div');
            div.style.cssText = `grid-area: ${i} / ${j} / ${i + 1} / ${j + 1};`
            div.classList.add("gridElement");
            container.appendChild(div);
        }
    }

    let nodeList = document.querySelectorAll('.gridElement');
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener("mouseenter", function () {
            nodeList[i].classList.add("hovered");
        })
    }
    
}

function clearGrid(containerID) {
    let container = document.querySelector(`#${containerID}`);
    while(container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
}

let resetButton = document.querySelector('#resetButton');
resetButton.addEventListener("click", function () {
    clearGrid('gridContainer');
    let newGridSize = +prompt("How big do you want your new grid to be?", "");
    createGrid('gridContainer', newGridSize);
})

createGrid('gridContainer', 16);
