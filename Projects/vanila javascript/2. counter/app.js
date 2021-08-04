const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const mode = e.currentTarget.classList;
    console.log(mode);
    if (mode.contains("decrease")) {
      count--;
    } else if (mode.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count === 0) {
      value.style.color = "#222";
    } else if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    }
    value.textContent = count;
  });
});
