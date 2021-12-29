let buttonBefore = document.querySelector('.example__button-before');
let buttonAfter = document.querySelector('.example__button-after');
let catBefore = document.querySelector('.example__img-object-left ');
let catAfter = document.querySelector('.example__img-object-right');
let thumb = document.querySelector('.example__button');
let sizeCurtainLeft = document.querySelector('.example__img-before');
let sizeCurtainRight = document.querySelector('.example__img-after');

let windowWidth = document.documentElement.clientWidth;

let startDown = 0;

if (windowWidth < 768) {
  buttonAfter.onclick = function () {
    catBefore.style.opacity = "0";
    catAfter.style.opacity = "1";
    thumb.style.left = "43px";
  }
  buttonBefore.onclick = function () {
    catAfter.style.opacity = "0";
    catBefore.style.opacity = "1";
    thumb.style.left = "6px";
  }
}

else {
  // function moveThumb(e) {

  //   thumb.style.left = (e.pageX - 100) + 'px';
  //   if (e.pageX - 100 > 426) [thumb.style.left = '426px'];
  //   if (e.pageX - 100 < 0) [thumb.style.left = '0px'];
  //   if ((e.pageX - 100 < 426) && (e.pageX - 100 > 0)) {
  //     sizeCurtainLeft.style.width = Math.round(592 / 426 * (e.pageX - 100)) + 'px';
  //     sizeCurtainRight.style.width = (592 - Math.round(592 / 426 * (e.pageX - 100))) + 'px';
  //     // console.log(e.pageX);
  //   }
  // }

  function moveThumb(e) {

    thumb.style.left = (e.pageX - 100) + 'px';
    //if (e.pageX - 100 > 426) [thumb.style.left = '426px'];
    //if (e.pageX - 100 < 0) [thumb.style.left = '0px'];
    if ((e.pageX - 100 < 426) && (e.pageX - 100 > 0)) {
      sizeCurtainLeft.style.width = Math.round(592 / 426 * (e.pageX - 100)) + 'px';
      sizeCurtainRight.style.width = (592 - Math.round(592 / 426 * (e.pageX - 100))) + 'px';
      //console.log(e.pageX);
    }
  }

  thumb.addEventListener("mousedown", function (e) {
    startDown = e.pageX;
    console.log(startDown);
    document.onmousemove = function (e) {
      moveThumb(e);
    }
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  });

};
