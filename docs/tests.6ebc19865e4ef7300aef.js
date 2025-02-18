/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/tests/forAllTests.js
console.clear();
var currentStage = 0;
var resultCount = 0;
var checkboxes = document.querySelectorAll('input[type=checkbox]');
function initTest(stages) {
  var numberOfQuestion = document.querySelector('.A_NumberOfQuestion');
  var question = document.querySelector('.A_Question');
  var answers = document.querySelectorAll('.Q_AnswerText');

  //выводит, какой вопрос из скольких
  numberOfQuestion.innerHTML = "\u0432\u043E\u043F\u0440\u043E\u0441 \u2116".concat(currentStage + 1, "/").concat(stages.length);

  //выводим текст вопроса
  question.innerHTML = stages[currentStage].question;

  //проверяем количество тегов для ответов и выводим их
  for (var i = 0; i < answers.length; i++) {
    answers[i].innerHTML = stages[currentStage].answers[i].text;
  }

  //проверяем количество чекбоксов и добавляем к ним дата-атрибут с количеством баллов за ответ
  for (var _i = 0; _i < checkboxes.length; _i++) {
    checkboxes[_i].dataset.count = stages[currentStage].answers[_i].count;
  }
}

//при выборе ответа
function chooseAnswer(stages, resultTable) {
  checkboxes.forEach(function (checkbox) {
    //когда пользователь кликнул на чекбокс варианта ответа
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        resultCount += Number(checkbox.dataset.count); //прибавили баллы из дата-атрибута
        updateStage(stages, resultTable); //меняем вопрос и ответы на новые
        checkbox.checked = false;
      }
    });
  });
}

//меняет вопросы и ответы, пока они не закончатся
function updateStage(stages, resultTable) {
  if (currentStage + 1 < stages.length) {
    currentStage++; //повышать счётчик вопросов-этапов
    initTest(stages); //выводим новые вопросы и ответы
  } else {
    showResult(resultTable);
  }
}
function showResult(resultTable) {
  var testMessages = document.querySelector('.S_Test');
  testMessages.remove();
  var testResult = document.createElement('div');
  testResult.classList.add('S_TestResult');
  var finalCount = document.createElement('div');
  finalCount.classList.add('A_FinalCount');
  finalCount.innerHTML = "\u0418\u0442\u043E\u0433\u043E \u0431\u0430\u043B\u043B\u043E\u0432: ".concat(resultCount);
  var resultHeader = document.createElement('div');
  resultHeader.classList.add('A_ResultHeader');
  var resultText = document.createElement('div');
  resultText.classList.add('A_ResultText');
  testResult.appendChild(finalCount);
  testResult.appendChild(resultHeader);
  testResult.appendChild(resultText);
  document.querySelector('body').appendChild(testResult);
  if (resultCount == 0 || resultCount == 1) {
    resultHeader.innerHTML = resultTable[0].header;
    resultText.innerHTML = resultTable[0].paragraph;
  } else if (resultCount == 2 || resultCount == 3) {
    resultHeader.innerHTML = resultTable[1].header;
    resultText.innerHTML = resultTable[1].paragraph;
  } else {
    resultHeader.innerHTML = resultTable[2].header;
    resultText.innerHTML = resultTable[2].paragraph;
  }
}

;// CONCATENATED MODULE: ./src/tests/test1.js


//база данных: вопросы и ответы
//сначала идёт массив с этапами
var stages = [
//этап 1
{
  //список вопросов
  question: ['Начнём с простого. Что можно делать с дайсами?'],
  //список ответов
  answers: [
  //каждый ответ содержит текст и количество баллов за ответ
  {
    text: 'кидать',
    count: 1
  }, {
    text: 'коптить',
    count: 0
  }, {
    text: 'курить',
    count: 0
  }, {
    text: 'колоть',
    count: 0
  }]
},
//этап 2
{
  question: ['Что такое казуалка?'],
  answers: [{
    text: 'игра для предпочитающих casual стиль',
    count: 0
  }, {
    text: 'простая настолка для новичков, правила которой легко объяснить на пальцах',
    count: 1
  }, {
    text: 'настолка для уверенных игроков с большим количеством правил',
    count: 0
  }, {
    text: 'настолка, небрежно созданная любителями на коленке',
    count: 0
  }]
},
//этап 3
{
  question: ['С казуалками разобрались. А что такое америтреш?'],
  answers: [{
    text: 'американский треш прямиком из Америки',
    count: 0
  }, {
    text: 'яркие красочные настолки с множеством мелких деталей: пластиковых моделек, картонных полей, счётчиков и тд.',
    count: 1
  }, {
    text: 'настолка с деталями собранными из переработанного пластика и мусора',
    count: 0
  }, {
    text: 'настолка, где вы сражаетесь, воюете, состязаетесь, в общем, состоите в конфронтации',
    count: 1
  }]
},
//этап 4
{
  question: ['Знакомы ли вы с евро/еврогейм?'],
  answers: [{
    text: 'не увлекаюсь таким',
    count: 0
  }, {
    text: 'особенно с экономическим вариантом, а не военным',
    count: 1
  }, {
    text: 'да, люблю сосредоточиться на стратегии, а не зависеть от рандомайзера',
    count: 1
  }, {
    text: 'то и дело, что коплю евро',
    count: 0
  }]
},
//этап 5
{
  question: ['Последний вопрос: играли в филлеры?'],
  answers: [{
    text: 'конечно, в переыве на обед',
    count: 1
  }, {
    text: 'знаю только те филлеры, что косметологи вкалывают',
    count: 0
  }, {
    text: 'для этого понадобился бы целый день',
    count: 0
  }, {
    text: 'разве что на разогрев',
    count: 1
  }]
}];
var resultTable = [{
  header: 'Кажется, вы только недавно узнали о настолках',
  paragraph: 'Впереди вас ждёт много открытий!'
}, {
  header: 'Сразу видно любителя посидеть в компании',
  paragraph: 'Вы уже не новичок, но ещё есть, чему учиться'
}, {
  header: 'Ого, да вы знаток!',
  paragraph: 'Сколько десяток настолок уже сыграно вами?'
}];
document.addEventListener('DOMContentLoaded', function () {
  initTest(stages);
  chooseAnswer(stages, resultTable);
});
/******/ })()
;