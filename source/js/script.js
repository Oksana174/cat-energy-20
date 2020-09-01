// cлайдер котов

var btnRight=document.querySelector(".slider__btn--right");
var btnLeft=document.querySelector(".slider__btn--left");
var sliderBefore = document.querySelector(".slider__demo--before");
var sliderAfter = document.querySelector(".slider__demo--after");

if(btnRight){
btnRight.addEventListener('click', function (evt) {
    evt.preventDefault ();
    sliderBefore.classList.add('slider__change');
    sliderBefore.classList.remove('slider__active');
    sliderAfter.classList.add('slider__active');
    sliderAfter.classList.remove('slider__change');

});
btnLeft.addEventListener('click', function (evt) {
    evt.preventDefault ();
    sliderBefore.classList.add('slider__active');
    sliderBefore.classList.remove('slider__change');
    sliderAfter.classList.add('slider__change');
    sliderAfter.classList.remove('slider__active');
});
};

// menu gamburger

var navMain = document.querySelector('.main-nav');
var hamburger = document.querySelectorAll('.hamburger');

navMain.classList.remove('main-nav--nojs');

hamburger.forEach(function (el) {
  el.addEventListener('click', function (evt) {
  evt.preventDefault ();
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    el.classList.add('hamburger--active');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    el.classList.remove('hamburger--active');
  }
  })
});
