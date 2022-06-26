'use strict'

// dropdown menu
function openProducts() { 
  document.getElementById('dropdown__menu').classList.toggle('show');
}



// burger menu
const burgerBtn = document.getElementById('header__burger');
const burgerMenu = document.getElementById('header__menu');

burgerBtn.addEventListener('click', function () {
  burgerMenu.classList.toggle('active');
  burgerBtn.classList.toggle('open');
});



// swiper
const swiper = new Swiper('.swiper__container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});