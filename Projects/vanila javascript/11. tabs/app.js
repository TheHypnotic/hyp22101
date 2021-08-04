const about = document.querySelector(".about");
const tab_btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  console.log(id);
  if (id) {
    tab_btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    contents.forEach(function (article) {
      article.classList.remove("active");
    });
    const content_element = document.getElementById(id);
    content_element.classList.add("active");
  }
});
