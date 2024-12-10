/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

var swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 5000
  },
  effect: 'cards',
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});
/******/ })()
;