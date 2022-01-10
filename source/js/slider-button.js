let buttonBefore = document.querySelector('.example__button-before');
let buttonAfter = document.querySelector('.example__button-after');
let catBefore = document.querySelector('.example__img-fat ');
let catAfter = document.querySelector('.example__img-skin');
let thumb = document.querySelector('.example__button');
let sizeCurtainLeft = document.querySelector('.example__div-fat');
let sizeCurtainRight = document.querySelector('.example__div-skin');

let windowWidth = document.documentElement.clientWidth;

let elem = document.querySelector('.example__track');
let track = elem.getBoundingClientRect();
let x1 = Math.round(track.x);
let x2 = Math.round(track.x + track.width);

let trackWidth;

let version;
let currentLeftWidth;
let currentRightWidth;
let curtainWidth;

version = getComputedStyle(document.documentElement).getPropertyValue("--window-version");

function windowResize () {
  version = getComputedStyle(document.documentElement).getPropertyValue("--window-version");
  if (version === '"tablet"') {
    thumb.style.setProperty('--left-position', '50%');
    sizeCurtainLeft.style.setProperty("--width-curtain-left", `296px`);
    sizeCurtainRight.style.setProperty("--width-curtain-right", `296px`);
    //console.log(version);
  }
  if (version === '"mobile"') {
    thumb.style.setProperty('--left-position', '21px');
    sizeCurtainLeft.style.setProperty("--width-curtain-left", `280px`);
    sizeCurtainRight.style.setProperty("--width-curtain-right", `1px`);
  }
}

window.addEventListener("resize", windowResize);

function moveThumb(e) {
    thumb.style.setProperty('--left-position', (e.pageX - track.x) + "px");
    if (e.pageX > x2) [thumb.style.setProperty('--left-position', ( track.width ) + "px")];
    if (e.pageX < x1) [thumb.style.setProperty('--left-position', '0px')];
    if ((e.pageX < x2) && (e.pageX > x1)) {
      currentLeftWidth = Math.round( parseInt(curtainWidth, 10) / parseInt(trackWidth, 10) * (e.pageX - track.x));
      sizeCurtainLeft.style.setProperty("--width-curtain-left", `${currentLeftWidth}px`);
      currentRightWidth = parseInt(curtainWidth, 10) - Math.round( parseInt(curtainWidth, 10) / parseInt(trackWidth, 10) * (e.pageX - track.x));
      sizeCurtainRight.style.setProperty("--width-curtain-right", `${currentRightWidth}px`);
    }
 }

thumb.addEventListener("mousedown", function (e) {

  elem = document.querySelector('.example__track');
  track = elem.getBoundingClientRect();
  x1 = Math.round(track.x);
  x2 = Math.round(track.x + track.width);

  curtainWidth = getComputedStyle(document.querySelector('.example__grid')).getPropertyValue("--curtain-width");
  trackWidth = getComputedStyle(document.querySelector('.example__track')).getPropertyValue("--track-width");
  //console.log(trackWidth);

  document.onmousemove = function (e) {
    moveThumb(e);
  }

  document.onmouseup = function () {
    document.onmousemove = null;
    document.onmouseup = null;
  }
});


buttonAfter.onclick = function () {
  sizeCurtainLeft.style.setProperty("--width-curtain-left", `0px`);

  if (version === '"mobile"') {
    sizeCurtainRight.style.setProperty("--width-curtain-right", `280px`);
  } else {
    sizeCurtainRight.style.setProperty("--width-curtain-right", `492px`);
  }
}

buttonBefore.onclick = function () {
  if (version === '"mobile"') {
    sizeCurtainLeft.style.setProperty("--width-curtain-left", `280px`);
  } else {
    sizeCurtainLeft.style.setProperty("--width-curtain-left", `492px`);
  }

  sizeCurtainRight.style.setProperty("--width-curtain-right", `0px`);
}




// if (version === '"mobile"') {
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

// if (version === '"tablet"') {
//   function moveThumb(e) {
//     thumb.style.setProperty('--left-position', (e.pageX - track.x) + "px");
//     if (e.pageX > x2) [thumb.style.setProperty('--left-position', track.width + "px")];
//     if (e.pageX < x1) [thumb.style.setProperty('--left-position', '0px')];
//     if ((e.pageX < x2) && (e.pageX > x1)) {
//       sizeCurtainLeft.style.width = Math.round(592 / 426 * (e.pageX - track.x)) + 'px';
//       sizeCurtainRight.style.width = (592 - Math.round(592 / 426 * (e.pageX - track.x))) + 'px';
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
