const container = document.querySelector(".container");

const CONTAINER_SIZE = 512;
var counter = 1;

// draw the grid based on the size
function drawGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let pixel = document.createElement("div");
      pixel.classList.add("pixel");

      let length = (CONTAINER_SIZE / size);
      pixel.style.width = `${length}px`;
      pixel.style.height = `${length}px`;

      container.appendChild(pixel);

      pixel.addEventListener("mouseenter", () => {
        var styles = getComputedStyle(pixel);
        let opacity = styles.getPropertyValue("opacity");
        opacity -= 0.1;
        pixel.style.opacity = `${opacity}`;
        //pixel.style.backgroundColor = "Cyan";
      })
    }
  }
}

// get NodeList of all the pixels
function getPixels() {
  return document.querySelectorAll(".pixel");
}

// delete the existing grid
function deleteGrid() {
  const pixels = getPixels();

  for (const p of pixels) {
    container.removeChild(p);
  }
}

// get the length from the form, and draw the Grid based on that
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // to prevent the browser from refreshing after submit

  var formData = new FormData(e.target);

  deleteGrid();

  drawGrid(formData.get("size"));
})

// reset the color of the grid back to original
const button = document.querySelector("button#clear");

button.addEventListener("click", () => {
  const pixels = getPixels();
  for (const p of pixels) {
    p.style.opacity = 1;
  }
})
