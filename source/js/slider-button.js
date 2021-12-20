let buttonBefore = document.querySelector('.example__button-before');
let buttonAfter = document.querySelector('.example__button-after');
let catBefore = document.querySelector('.example__img-before');
let catAfter = document.querySelector('.example__img-after');
let middleButton = document.querySelector('.example__button');

buttonAfter.onclick = function () {
  //catBefore.style.display = "none";
  //catAfter.style.display = "block";
  catBefore.style.opacity = "0";
  catAfter.style.opacity = "1";
  middleButton.style.left = "43px";
}

buttonBefore.onclick = function () {
  //catAfter.style.display = "none";
  //catBefore.style.display = "block";
  catAfter.style.opacity = "0";
  catBefore.style.opacity = "1";
  middleButton.style.left = "6px";
}
