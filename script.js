const container = document.querySelector(".container");

const GRID_SIZE = 16;

for (let i = 0; i < GRID_SIZE; i++) {
  for (let j = 0; j < GRID_SIZE; j++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    
    container.appendChild(pixel);

    pixel.addEventListener("mouseenter", () => {
      pixel.style.backgroundColor = "Cyan";
    })
  }
}

const button = document.querySelector("button");
const pixels = document.querySelectorAll(".pixel");

button.addEventListener("click", () => {
  for (const p of pixels) {
    p.style.backgroundColor = "Blue";
  }
})
