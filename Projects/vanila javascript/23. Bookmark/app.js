class bookmark {
  constructor(siteName, siteUrl) {
    this.siteName = siteName;
    this.siteUrl = siteUrl;
  }
}
// UI
class UI {
  static displayBookmarks() {
    document.getElementById("bookmarksResults").innerHTML = "";
    let bookmarks = store.getBookmarks();
    bookmarks.forEach((site) => UI.addTolist(site));
  }
  static addTolist(site) {
    const Html =
      '<div class="well">' +
      "<h3>" +
      site.siteName +
      ' <a class="btn btn-default" target="_blank" href="' +
      site.siteUrl +
      '">Visit</a> ' +
      " <a onclick=\"deleteBookmark('" +
      site.siteUrl +
      '\')" class="btn btn-danger" href="#">Delete</a> ' +
      "</h3>" +
      "</div>";

    document.getElementById("bookmarksResults").innerHTML += Html;
  }

  static backToDefault() {
    document.querySelector("#siteName").value = "";
    document.querySelector("#siteUrl").value = "";
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.textContent = message;
    const alertContainer = document.getElementById("alert");
    alertContainer.appendChild(div);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
}
// store
class store {
  static getBookmarks() {
    let bookmarks_;
    if (localStorage.getItem("bookmarks") === null) {
      bookmarks_ = [];
    } else {
      bookmarks_ = JSON.parse(localStorage.getItem("bookmarks"));
    }

    return bookmarks_;
  }

  static addBookmark_(site) {
    const bookmarks_ = store.getBookmarks();
    bookmarks_.push(site);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks_));
  }

  static removeBookmarks_(url) {
    const bookmarks_ = store.getBookmarks();
    for (let i = 0; i < bookmarks_.length; i++) {
      if (bookmarks_[i].siteUrl === url) {
        bookmarks_.splice(i, 1);
      }
    }

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks_));
  }
}
// events
document.addEventListener("DOMContentLoaded", UI.displayBookmarks);
document.querySelector("#myForm").addEventListener("submit", addBookmark);

// functions for events
// addBookmarks
function addBookmark(e) {
  e.preventDefault();

  const siteName = document.querySelector("#siteName").value;
  const siteUrl = document.querySelector("#siteUrl").value;
  if (siteName === "" || siteUrl === "") {
    // console.log("HOY! Fill the inputs. yare yare!!!");
    UI.showAlert("Please Fill all the fields!!", "danger");
  } else if (!checkValidation(siteUrl)) {
    console.log(siteUrl);
    UI.showAlert("Please Enter A Valid Site Address!!!", "danger");
    // return false;
  } else {
    const site = new bookmark(siteName, siteUrl);
    UI.addTolist(site);
    store.addBookmark_(site);
    UI.backToDefault();
    UI.showAlert("added successfully", "success");
  }
}

// remove Bookmarks

window.onload = () => {
  document
    .getElementById("bookmarksResults")
    .addEventListener("click", deleteBookmark);
};

function deleteBookmark(url) {
  store.removeBookmarks_(url);
  UI.displayBookmarks();
  UI.showAlert("removed successfully", "danger");
}

// validation
function checkValidation(siteUrl) {
  var expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

  let regex = new RegExp(expression);
  if (!siteUrl.match(regex)) {
    return false;
  }
  return true;
}
