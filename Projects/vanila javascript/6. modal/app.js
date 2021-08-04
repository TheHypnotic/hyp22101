const modal_btn = document.querySelector(".modal-btn");
const close_btn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

modal_btn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
close_btn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
