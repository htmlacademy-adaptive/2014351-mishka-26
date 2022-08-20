document.addEventListener("DOMContentLoaded", function () {
  const button =  document.querySelector(".nav__toggle");
  const nav = document.querySelector(".nav");
  const nojs = document.querySelector(".nojs");

  if (nojs) {
    nojs.classList.remove("nojs");
  }

  if (button) {
    button.addEventListener('click', (evt) => {
      evt.preventDefault();
      nav.classList.toggle('nav--opened');
    });
  }

  button.click();
});
