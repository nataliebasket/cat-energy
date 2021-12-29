// let buttonBefore = document.querySelector('.example__button-before');
// let buttonAfter = document.querySelector('.example__button-after');
// let catBefore = document.querySelector('.example__img-object-left ');
// let catAfter = document.querySelector('.example__img-object-right');
// let thumb = document.querySelector('.example__button');
// let sizeCurtainLeft = document.querySelector('.example__img-before');
// let sizeCurtainRight = document.querySelector('.example__img-after');

// let windowWidth = document.documentElement.clientWidth;

// let elem = document.querySelector('.example__track');
// let track = elem.getBoundingClientRect();
// let x1 = Math.round(track.x);
// let x2 = Math.round(track.x + track.width);

// if (windowWidth < 768) {
//   buttonAfter.onclick = function () {
//     catBefore.style.opacity = "0";
//     catAfter.style.opacity = "1";
//     thumb.style.left = "43px";
//   }
//   buttonBefore.onclick = function () {
//     catAfter.style.opacity = "0";
//     catBefore.style.opacity = "1";
//     thumb.style.left = "6px";
//   }
// }

// else {

//   function moveThumb(e) {
//     thumb.style.left = (e.pageX - track.x) + 'px';
//     if (e.pageX > x2) [thumb.style.left = track.width + 'px'];
//     if (e.pageX < x1) [thumb.style.left = '0px'];
//     if ((e.pageX < x2) && (e.pageX > x1)) {
//       sizeCurtainLeft.style.width = Math.round(592 / 426 * (e.pageX - track.x)) + 'px';
//       sizeCurtainRight.style.width = (592 - Math.round(592 / 426 * (e.pageX - track.x))) + 'px';
//       //console.log(e.pageX);
//     }
//   }

//   thumb.addEventListener("mousedown", function (e) {
//     document.onmousemove = function (e) {
//       moveThumb(e);
//     }
//     document.onmouseup = function () {
//       document.onmousemove = null;
//       document.onmouseup = null;
//     }
//   });

// };

let buttonBefore = document.querySelector('.example__button-before');
let buttonAfter = document.querySelector('.example__button-after');
let catBefore = document.querySelector('.example__img-object-left ');
let catAfter = document.querySelector('.example__img-object-right');
let thumb = document.querySelector('.example__button');
let sizeCurtainLeft = document.querySelector('.example__img-before');
let sizeCurtainRight = document.querySelector('.example__img-after');

let windowWidth = document.documentElement.clientWidth;

let elem = document.querySelector('.example__track');
let track = elem.getBoundingClientRect();
let x1 = Math.round(track.x);
let x2 = Math.round(track.x + track.width);

let version = getComputedStyle(document.documentElement).getPropertyValue("--window-version");
//console.log(version);

window.onresize = function () {
  let version = getComputedStyle(document.documentElement).getPropertyValue("--window-version");
  console.log(version);
};

if (version == '"mobile"') {
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

if (version === '"tablet"') {
  function moveThumb(e) {
    thumb.style.setProperty('--left-position', (e.pageX - track.x) + "px");
    if (e.pageX > x2) [thumb.style.setProperty('--left-position', track.width + "px")];
    if (e.pageX < x1) [thumb.style.setProperty('--left-position', '0px')];
    if ((e.pageX < x2) && (e.pageX > x1)) {
      sizeCurtainLeft.style.width = Math.round(592 / 426 * (e.pageX - track.x)) + 'px';
      sizeCurtainRight.style.width = (592 - Math.round(592 / 426 * (e.pageX - track.x))) + 'px';
    }
  }

  thumb.addEventListener("mousedown", function (e) {
    document.onmousemove = function (e) {
      moveThumb(e);
    }
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  });
};


