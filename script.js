let about = document.getElementById("about");
let getAbout = document.getElementById("getAbout");
let resume = document.getElementById("resume");
let getResume = document.getElementById("getResume");
let works = document.getElementById("works");
let getWorks = document.getElementById("getWorks");
let blog = document.getElementById("blog");
let getBlog = document.getElementById("getBlog");
let contact = document.getElementById("contact");
let getContact = document.getElementById("getContact");

function remove() {
  about.classList.remove("view");
  getAbout.classList.remove("selected");
  resume.classList.remove("view");
  getResume.classList.remove("selected");
  works.classList.remove("view");
  getWorks.classList.remove("selected");
  blog.classList.remove("view");
  getBlog.classList.remove("selected");
  contact.classList.remove("view");
  getContact.classList.remove("selected");
}

getAbout.addEventListener("click", function (e) {
  if (window.innerWidth > 1040) {
    e.preventDefault();
    remove("about");
    about.classList.add("view");
    getAbout.classList.add("selected");
  }
});
getResume.addEventListener("click", function (e) {
  if (window.innerWidth > 1040) {
    e.preventDefault();
    remove();
    resume.classList.add("view");
    getResume.classList.add("selected");
  }
});
getWorks.addEventListener("click", function (e) {
  if (window.innerWidth > 1040) {
    e.preventDefault();
    remove();
    works.classList.add("view");
    getWorks.classList.add("selected");
  }
});
getBlog.addEventListener("click", function (e) {
  if (window.innerWidth > 1040) {
    e.preventDefault();
    remove();
    blog.classList.add("view");
    getBlog.classList.add("selected");
  }
});
getContact.addEventListener("click", function (e) {
  if (window.innerWidth > 1040) {
    e.preventDefault();
    remove();
    contact.classList.add("view");
    getContact.classList.add("selected");
  }
});

var email = document.getElementById("email");
var form = document.getElementById("form");

let name;
let message;
let userObject = {};

name = document.getElementById("name");
message = document.getElementById("message");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  userObject.name = name.value;
  userObject.email = email.value;
  userObject.message = message.value;
  console.log("envie");
  localStorage.setItem("submit", JSON.stringify(userObject));
  console.log(userObject);
});
