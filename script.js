//query Selectors
const grid = document.querySelector(".grid");
const resetBtn = document.querySelector(".resetBtn");
const box = document.getElementsByClassName("box");
let userInput = 16;

//create divs
function createDiv(col = 16) {
	for (let i = 0; i < col * col; i++) {
		const div = document.createElement("div");
		div.style.border = "1px solid black";
		grid.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
		grid.style.gridTemplateRows = `repeat(${col}, 1fr)`;
		div.classList.add("box");
		grid.appendChild(div);
	}
}

//coloring the grid
function colorGrid() {
	this.style.backgroundColor = "#000000";
}

// Reset the grid
function resetGrid() {
	//clear the grid
	while (grid.firstChild) {
		grid.removeChild(grid.lastChild);
	}

	//new grid size from user
	userInput = prompt("Enter the number of rows(Between 1 to 100)");
	if (!(userInput > 0 && userInput <= 100)) {
		alert("Invalid Number");
		resetGrid();
	} else {
		createDiv(userInput);
		mouseHover();
	}
}

// Mouse hover function
function mouseHover() {
	let squares = grid.querySelectorAll("div");
	squares.forEach((gridPixel) =>
		gridPixel.addEventListener("mouseover", colorGrid)
	);
}

//Events
resetBtn.addEventListener("click", resetGrid);

//Default calling
createDiv();
mouseHover();
