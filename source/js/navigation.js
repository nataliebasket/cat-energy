let nav = document.querySelector('.navigation');
      let navButton = document.querySelector('.navigation__button');
      console.log("Ghbdtn");

      nav.classList.remove('navigation--nojs');

      navButton.onclick = function () {
        if (nav.classList.contains('navigation--closed')) {
          nav.classList.remove('navigation--closed');
          nav.classList.add('navigation--opened');
          console.log("Ghbdtn");
        } else {
          nav.classList.add('navigation--closed');
          nav.classList.remove('navigation--opened');
        }
      }
