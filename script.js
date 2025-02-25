const container = document.querySelector(".container");

const CONTAINER_SIZE = 512;

// draw the grid based on the size
function drawGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let pixel = document.createElement("div");
      pixel.classList.add("pixel");

      let length = CONTAINER_SIZE / size;
      pixel.style.width = `${length}px`;
      pixel.style.height = `${length}px`;

      container.appendChild(pixel);

      pixel.addEventListener("mouseenter", () => {
        pixel.style.backgroundColor = "Cyan";
      })
    }
  }
}

// get the length from the form, and draw the Grid based on that
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // to prevent the browser from refreshing after submit

  var formData = new FormData(e.target);

  drawGrid(formData.get("size"));
})

const button = document.querySelector("button#clear");

button.addEventListener("click", () => {
  const pixels = document.querySelectorAll(".pixel");
  for (const p of pixels) {
    p.style.backgroundColor = "Blue";
  }
})
