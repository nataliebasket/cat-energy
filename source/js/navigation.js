let nav = document.querySelector('.navigation');
let navButton = document.querySelector('.navigation__button');

nav.classList.remove('navigation--nojs');

navButton.onclick = function () {
  if (nav.classList.contains('navigation--closed')) {
    nav.classList.remove('navigation--closed');
    nav.classList.add('navigation--opened');
  } else {
    nav.classList.add('navigation--closed');
    nav.classList.remove('navigation--opened');
  }
}
