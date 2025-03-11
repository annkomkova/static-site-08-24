/******/ (() => { // webpackBootstrap
console.clear();
document.addEventListener('DOMContentLoaded', function () {
  initFilter();
});
function initFilter() {
  var tags = document.querySelectorAll('.A_FilterTag');
  var a = document.querySelector('.all');
  tags.forEach(function (tag) {
    tag.addEventListener('click', function () {
      if (tag != a) {
        a.classList.remove('active');
        tag.classList.toggle('active');
        console.log('здесь будет функция фильтрации по тегу');
        filterByTag();
      }
      var b = document.querySelectorAll('.active');
      if (tag == a && !tag.classList.contains('active')) {
        b.forEach(function (tag) {
          tag.classList.remove('active');
        });
        tag.classList.add('active');
        console.log('здесь будет функция вывода всех карточек');
        filterAll();
      }
      if (tags.length - 1 == b.length || b.length == 0) {
        b.forEach(function (tag) {
          tag.classList.remove('active');
        });
        a.classList.add('active');
        console.log('здесь будет функция вывода всех карточек');
        filterAll();
      }
    });
  });
}
function filterAll() {
  var cards = document.querySelectorAll('.O_ArticleCard');
  var activeTags = document.querySelectorAll('.active');
  activeTags.forEach(function (tag) {
    var classList = tag.className.split(' ');
    if (tag.classList.contains('all')) {
      cards.forEach(function (card) {
        card.style.cssText = 'display: block;';
      });
    }
  });
}
function filterByTag() {
  var cards = document.querySelectorAll('.O_ArticleCard');
  var activeTags = document.querySelectorAll('.active');
  var tagList = [];
  var count;
  cards.forEach(function (card) {
    card.style.cssText = 'display: none;';
  });
  activeTags.forEach(function (tag) {
    var classList = tag.className.split(' ');
    classList = classList.sort();
    count = 1;
    if (classList[1] == 'active') {
      count++;
    }
    for (var i = count; i < classList.length; i++) {
      tagList.push(classList[i]);
    }
  });
  tagList.forEach(function (tagName) {
    cards.forEach(function (card) {
      if (card.classList.contains(tagName)) {
        card.style.cssText = 'display: block;';
      }
    });
  });
}
/******/ })()
;