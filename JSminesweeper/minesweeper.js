//the grid
const columns = 20;
const rows = 10;

function createGrid() {
  const container = document.getElementById("minesweeper");
  container.innerHTML = ""; // Clear existing grid

  const gridElement = document.createElement("div");
  gridElement.classList.add("grid");
  container.appendChild(gridElement);

  // Make grid stretch fully with `fr` units
  gridElement.style.display = "grid";
  gridElement.style.width = "100%";
  gridElement.style.height = "100%";
  gridElement.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  gridElement.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  // Create cells
  for (let i = 0; i < columns * rows; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      // Click event
      cell.addEventListener("click", () => {
          cell.classList.add("revealed");
          cell.innerText = Math.random() > 0.8 ? "💣" : "";
      });

      // Right-click to mark as a mine
      cell.addEventListener("contextmenu", (event) => {
          event.preventDefault();
          if (!cell.classList.contains("revealed")) {
              cell.innerText = cell.innerText === "🚩" ? "" : "🚩";
          }
      });

      gridElement.appendChild(cell);
  }
}


// Call function on load
createGrid();