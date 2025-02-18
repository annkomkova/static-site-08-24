console.clear()
let currentStage = 0
let resultCount = 0
const checkboxes = document.querySelectorAll('input[type=checkbox]')

function initTest(stages) {
  const numberOfQuestion = document.querySelector('.A_NumberOfQuestion')
  const question = document.querySelector('.A_Question')
  const answers = document.querySelectorAll('.Q_AnswerText')

  //выводит, какой вопрос из скольких
  numberOfQuestion.innerHTML = `вопрос №${currentStage + 1}/${stages.length}`

  //выводим текст вопроса
  question.innerHTML = stages[currentStage].question

  //проверяем количество тегов для ответов и выводим их
  for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = stages[currentStage].answers[i].text
  }

  //проверяем количество чекбоксов и добавляем к ним дата-атрибут с количеством баллов за ответ
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].dataset.count = stages[currentStage].answers[i].count
  }
}

//при выборе ответа
function chooseAnswer(stages, resultTable) {
  checkboxes.forEach((checkbox) => {
    //когда пользователь кликнул на чекбокс варианта ответа
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        resultCount += Number(checkbox.dataset.count) //прибавили баллы из дата-атрибута
        updateStage(stages, resultTable) //меняем вопрос и ответы на новые
        checkbox.checked = false
      }
    })
  })
}

//меняет вопросы и ответы, пока они не закончатся
function updateStage(stages, resultTable) {
  if (currentStage + 1 < stages.length) {
    currentStage++ //повышать счётчик вопросов-этапов
    initTest(stages) //выводим новые вопросы и ответы
  } else {
    showResult(resultTable)
  }
}

function showResult(resultTable) {
  const testMessages = document.querySelector('.S_Test')
  testMessages.remove()

  const testResult = document.createElement('div')
  testResult.classList.add('S_TestResult')

  const finalCount = document.createElement('div')
  finalCount.classList.add('A_FinalCount')
  finalCount.innerHTML = `Итого баллов: ${resultCount}`

  const resultHeader = document.createElement('div')
  resultHeader.classList.add('A_ResultHeader')

  const resultText = document.createElement('div')
  resultText.classList.add('A_ResultText')

  testResult.appendChild(finalCount)
  testResult.appendChild(resultHeader)
  testResult.appendChild(resultText)

  document.querySelector('body').appendChild(testResult)

  if (resultCount == 0 || resultCount == 1) {
    resultHeader.innerHTML = resultTable[0].header
    resultText.innerHTML = resultTable[0].paragraph
  } else if (resultCount == 2 || resultCount == 3) {
    resultHeader.innerHTML = resultTable[1].header
    resultText.innerHTML = resultTable[1].paragraph
  } else {
    resultHeader.innerHTML = resultTable[2].header
    resultText.innerHTML = resultTable[2].paragraph
  }
}

export { initTest, chooseAnswer }
