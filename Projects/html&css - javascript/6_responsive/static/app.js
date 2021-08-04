document.querySelector("#menu-btn").addEventListener("click", function () {
  document.querySelector("#navbar").classList.toggle("toggle");
});

document.querySelector("#mode-btn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
