const quizArray = [
  {
    question: 'Qual idioma é falado no Brasil?',
    options: ['Portugûes', 'Inglês', 'Japonês', 'Italiano'],
    answer: 'option1'
  },
  {
    question: 'Quais são os minerais importantes encontrados no Brasil?',
    options: [
      'Petróleo, Ouro e Bauxita',
      'Sal, óleo e Cobre',
      'Ferro, Diamante e Latão',
      'Nenhuma das anteriores'
    ],
    answer: 'option1'
  },
  {
    question: 'Quem foi o Primeiro Presidente do Brasi?',
    options: [
      'Sebastião Macalé',
      'Pedro Pedral de Caminhas',
      'Marechal Deodoro',
      'Bolsomito'
    ],
    answer: 'option3'
  },

  {
    question: 'Qual a medida territorial do Brasil?',
    options: [
      '2.321.568 km²',
      '8.516.000 km²',
      '12.256.333 km²',
      'NDA - Nenhuma das alternativas anteriores'
    ],
    answer: 'option2'
  },

  {
    question: 'Qual a população atual do Brasil no ano de 2020?',
    options: [
      '125,8 milhões',
      '315,3 milhões',
      '212,6 milhões',
      'NDA - Nenhuma das alternativas anteriores'
    ],
    answer: 'option3'
  }
]
let result = 0
let questionNumber = 1
let question = 0
let answer

function check() {
  $('#question').append(
    '<p class="number">Question ' +
      questionNumber +
      ' of ' +
      quizArray.length +
      '</p>'
  )
  $('#question').append(
    '<p class="questions">' + quizArray[question].question + '</p>'
  )
  $('#question').append(
    '<div><div class="choose"><input type="radio" name="options" value="option1">' +
      quizArray[question].options[0] +
      '</div><div class="choose"><input type="radio" name="options" value="option2">' +
      quizArray[question].options[1] +
      '</div><div class="choose"><input type="radio" name="options" value="option3">' +
      quizArray[question].options[2] +
      '</div><div class="choose"><input type="radio" name="options" value="option4">' +
      quizArray[question].options[3] +
      '</div></div>'
  )
  $('#question').append('<button id="next" disabled>Next</button>')
  question++
  questionNumber++
}

$(function () {
  $('#begin').click(function () {
    $('body').css('background-image', 'none')
    $('body').css('background-color', 'white')
    $('#landingPage').css('display', 'none')
    $('#question').css('display', 'block')
    check()
  })

  $('#question').on('click', '.choose', function () {
    $('#question').find('*').removeAttr('style')
    $(this).children().prop('checked', true)
    $(this).css('background-color', '#4CAF50')
    answer = $(this).children().val()
    if (question <= 5) {
      $('#next').css('opacity', '1')
      $('#next').css('cursor', 'pointer')
      $('#next').removeAttr('disabled')
    } else {
      $('#next').css('display', 'none')
    }
    $('#submit').css('opacity', '1')
    $('#submit').css('cursor', 'pointer')
    $('#submit').removeAttr('disabled')
  })

  $('#question').on('click', '#next', function () {
    if (answer === quizArray[question - 1].answer) {
      result++
    }
    $('#question').children().remove()
    check()
    if (questionNumber - 1 === quizArray.length) {
      $('#next').css('display', 'none')
      $('#question').append('<button id="submit" disabled>Submit</button>')
    }
  })

  $('#question').on('click', '#submit', function () {
    if (answer === quizArray[question - 1].answer) {
      result++
    }
    $('#question').css('display', 'none')
    $('#result').css('display', 'block')
    $('#result').append(
      '<div class=results><p>Obrigado por completar o teste!!!</p></divp>Você acertou <span class="score">' +
        result +
        ' </span> de <span class="score">' +
        quizArray.length +
        '</span> questões </p>'
    )
    $('#result').append('<button id="finish">Finish</button>')
  })

  $('#result').on('click', '#finish', function () {
    history.go(0)
  })
})
