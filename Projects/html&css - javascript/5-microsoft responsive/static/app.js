const navBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".main-menu");

navBtn.addEventListener("click", function () {
  nav.classList.toggle("show");
});
