//query Selectors
const container = document.querySelector(".container");
const grid = document.querySelector(".grid");
const resetBtn = document.querySelector(".resetBtn");

// Calculate cell width
let cellWidth = 40 / 16 + "rem";
// Calculate cell height to fill board
let cellHeight = 40 / 16 + "rem";

//create divs
function createDiv(col, row) {
	for (let i = 0; i < col * row; i++) {
		const div = document.createElement("div");
		div.style.border = "1px solid black";
		grid.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
		grid.style.gridTemplateRows = `repeat(${row}, 1fr)`;
		grid.appendChild(div).classList.add("box");
	}
}
createDiv(16, 16);
// Reset the grid
function eraseAllColor() {
	var gridPixels = grid.querySelectorAll("div");
	gridPixels.forEach(
		(gridPixel) => (gridPixel.style.backgroundColor = "#ffffff")
	);
}

//Events
resetBtn.addEventListener("click", eraseAllColor);
