const color_rng = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let random_color = "#";
  for (i = 0; i < 6; i++) {
    random_color += color_rng[rng()];
  }

  document.body.style.backgroundColor = random_color;
  color.textContent = random_color;
});

function rng() {
  return Math.floor(Math.random() * color_rng.length);
}
