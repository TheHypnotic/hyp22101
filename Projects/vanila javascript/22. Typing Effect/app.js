class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const index = this.wordIndex % this.words.length;
    const currentWord = this.words[index];

    // Deleting or Adding?
    if (this.isDeleting) {
      this.txt = currentWord.substring(0, this.txt.length - 1);
    } else {
      this.txt = currentWord.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }
    // if word is Complete
    if (!this.isDeleting && this.txt === currentWord) {
      this.isDeleting = true;
      typeSpeed = this.wait;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      typeSpeed = 500;
      this.wordIndex++;
      console.log(this.wordIndex);
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init When The Dom Loaded
document.addEventListener("DOMContentLoaded", init);

function init() {
  txtElement = document.querySelector(".txt-type");
  words = JSON.parse(txtElement.getAttribute("data-words"));
  wait = txtElement.getAttribute("data-wait");

  new TypeWriter(txtElement, words, wait);
}
