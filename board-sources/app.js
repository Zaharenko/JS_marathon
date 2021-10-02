const board = document.querySelector("#board");
const button = document.querySelector(".clear");
const colors = ["red", "pink", "green", "orange", "yellow", "blue"];
const SQUARES_NUMBER = 10000;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));
  button.addEventListener("click", () => deleteDrow(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function deleteDrow(element) {
  element.style.backgroundColor = "#1d1d1d";
}
