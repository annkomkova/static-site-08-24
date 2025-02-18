/******/ (() => { // webpackBootstrap
console.clear();
document.addEventListener('DOMContentLoaded', function () {
  // searchHeader()
  changeTextOnClick();
  // askUserName()
  showCounter();
  showRandomWord();
});
function searchHeader() {
  var headerTag = document.querySelector('h1');
  var headerClass = document.querySelector('.header');
  var headerID = document.querySelector('#header');
  console.log(headerTag);
  console.log(headerClass);
  console.log(headerID);
}
function changeTextOnClick() {
  var text = document.querySelector('.text');
  text.addEventListener('click', function () {
    if (text.innerHTML == 'Доброе утро!') {
      text.innerHTML = 'Добрый день!';
    } else if (text.innerHTML == 'Добрый день!') {
      text.innerHTML = 'Добрый вечер!';
    } else {
      text.innerHTML = 'Доброе утро!';
    }
  });
}
function askUserName() {
  var userText = document.querySelector('.userText');
  var userName = prompt('Как тебя зовут?', 'Гена');
  if (userName == null || userName == '') {
    userText.innerHTML = "\u041F\u0440\u0438\u0432\u0435\u0442, \u0447\u0435\u043B\u043E\u0432\u0435\u043A-\u0431\u0435\u0437-\u0438\u043C\u0435\u043D\u0438!";
  } else {
    userText.innerHTML = "\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(userName, "!");
  }
}
function showCounter() {
  var clickText = document.querySelector('.clickText');
  var clickButton = document.querySelector('.clickButton');
  var cnt = 0;
  clickButton.addEventListener('click', function () {
    // cnt = cnt + 1
    // cnt += 1
    cnt++;
    clickText.innerHTML = "\u0412\u044B \u043A\u043B\u0438\u043A\u043D\u0443\u043B\u0438 ".concat(cnt, " \u0440\u0430\u0437!");
    if (cnt % 5 == 0) {
      clickText.classList.add('red');
    } else {
      clickText.classList.remove('red');
    }
  });
}
function showRandomWord() {
  var words = ['удав', 'кабан', 'кот', 'аксолотль', 'пингвин', 'лось', 'суслик', 'хомяк', 'динозавр', 'орёл', 'бизон', 'нарвал', 'сивуч', 'бык'];
  var randomText = document.querySelector('.randomText');
  var randomButton = document.querySelector('.randomButton');
  randomButton.addEventListener('click', function () {
    var index = Math.floor(words.length * Math.random());
    randomText.innerHTML = "\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0432\u044B \u043E\u0447\u0430\u0440\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 ".concat(words[index]);
  });
}
/******/ })()
;