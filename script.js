const container = document.querySelector(".container");

const CONTAINER_SIZE = 512;

function drawGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let pixel = document.createElement("div");
      pixel.classList.add("pixel");

      let size = CONTAINER_SIZE / gridSize;
      pixel.style.width = size;
      pixel.style.height = size;

      container.appendChild(pixel);

      pixel.addEventListener("mouseenter", () => {
        pixel.style.backgroundColor = "Cyan";
      })
    }
  }
}

const button = document.querySelector("button#clear");
const pixels = document.querySelectorAll(".pixel");

button.addEventListener("click", () => {
  for (const p of pixels) {
    p.style.backgroundColor = "Blue";
  }
})
