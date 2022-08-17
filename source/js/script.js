document.addEventListener("DOMContentLoaded", function () {
  const button =  document.querySelector(".nav__toggle");
  const nav = document.querySelector(".nav");

  nav.classList.remove("nav--nojs");
  button.addEventListener("click", function () {
    if (nav.classList.contains("nav--closed")) {
      nav.classList.remove("nav--closed");
      nav.classList.add("nav--opened");
    } else {
      nav.classList.remove("nav--opened");
      nav.classList.add("nav--closed");
    }
  });

  button.click();
});
