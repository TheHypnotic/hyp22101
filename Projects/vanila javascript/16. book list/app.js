// Book Class: Represents A Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    let books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    list.appendChild(row);
  }
  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
  static showAlert(message, classname) {
    const div = document.createElement("div");
    div.className = `alert alert-${classname}`;
    div.textContent = message;
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);

    setTimeout(() => document.querySelector(".alert").remove(), 2000);
  }
  static backToDefault() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// Store Class: Handles Storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn, index) {
    const books = Store.getBooks();
    if (books.isbn === isbn) {
      books.splice(index, 1);
    }
    localStorage.setItem("books", JSON.stringify(books));
  }
}
// Event: Display Books
window.addEventListener("DOMContentLoaded", UI.displayBooks());
// Event: Add a Book
const submition = document.querySelector("#book-form");
submition.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // validation
  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Please Fill All the fields", "danger");
  } else {
    let book = new Book(title, author, isbn);
    UI.addBookToList(book);
    UI.showAlert("Book Added Successfuly", "success");
    UI.backToDefault();
    Store.addBook(book);
  }
});
// Event: Remove a Book

const list = document.querySelector("#book-list");
list.addEventListener("click", function (e) {
  // remove from UI
  UI.deleteBook(e.target);
  // alert
  UI.showAlert("Book Removed Successfuly", "info");
  //remvoe
  Store.removeBook();
});
