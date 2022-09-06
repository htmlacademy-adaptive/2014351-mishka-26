document.addEventListener("DOMContentLoaded", function () {
  //  nav
  const button = document.querySelector(".nav__toggle");
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

  //  modal
  const modal = document.querySelector(".modal-container");
  const promoButton = document.querySelector(".promo__button");

  if (promoButton) {
    promoButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      modal.classList.toggle('modal--open');
    });
  }

  const catalogButtons = document.querySelectorAll('.catalog__cart-button');

  if (catalogButtons.length > 0) {
    catalogButtons.forEach(element => {
      element.addEventListener('click', function (evt) {
        evt.preventDefault();
        modal.classList.add('modal--open');
      })
    })
  }

  if (modal) {
    document.addEventListener('click', function (evt) {
      if (modal.classList.contains('modal--open') && !evt.target.classList.contains('modal') && !evt.target.classList.contains('promo__button')) {
        let buttonsFound = false;
        if (catalogButtons.length) {
          buttonsFound = findInParent(evt.target, 'catalog__cart-button');
        }

        const isModalChildren = findInParent(evt.target, 'modal');
        if (!isModalChildren && !buttonsFound) {
          modal.classList.remove('modal--open');
        }
      }
    });
  }

  /**
   * Ищет класс searchingClass у родителей элемента element
   * возвращает true если элемент найден, иначе false
   */
  function findInParent(element, searchingClass) {
    let target = element.parentElement;
    let isFound = false;
    while (target.tagName !== 'BODY') {
      if (target.classList.contains(searchingClass)) {
        isFound = true;
        break;
      }
      target = target.parentElement;
    }

    return isFound;
  }

  const modalSubmit = document.querySelector('.modal__button');

  if (modalSubmit) {
    modalSubmit.addEventListener('click', function (evt) {
      evt.preventDefault();
      modal.classList.remove('modal--open');
    })
  }
});
