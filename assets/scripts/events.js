'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onNewUser = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)
  console.log('MDC data from onNewUser is', data)

  api.newUser(data)
    .then(ui.onNewUserSuccess)
    .catch(ui.onNewUserFailure)
}

const onRegUser = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)
  console.log('MDC data from onRegUser is ', data)

  api.regUser(data)
    .then(ui.onRegUserSuccess)
    .catch(ui.onRegUserFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)
  console.log('MDC data from onChangePassword is', data)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault() // extraneous

  console.log('onSignOutfired!')

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onViewGames = function () {
  event.preventDefault()
  console.log('onViewGames is hitting!')

  api.viewGames()
    .then(ui.onViewGamesSuccess)
    .catch(ui.onViewGamesFailure)
}

let gameEnd = false
let currentPlayer = 'X'
store.currentPlayer = currentPlayer
//let gameOver = false //added from Aidan's code
let board = ['', '', '', '', '', '', '', '', '']
//let gameOver = false - this line caused errors

const onBoxClick = function (event) {
  let target = $(event.target)

  if (gameEnd) {
    return
  } else {
    const clickedCellIndex = target.attr('data-cell-index')

    if (target.text() === '') {
      target.text(currentPlayer)

      board[clickedCellIndex] = currentPlayer

      gameEnd = isGameOver(board)

      api.updateGame(clickedCellIndex, currentPlayer, gameEnd)
        .then(ui.onUpdateGameSuccess)
        .catch(ui.onUpdateGameFailure)

      if (currentPlayer === 'X') {
      currentPlayer = '0'
      } else {
      currentPlayer = 'X'
      }
    }

  else if ($(event.target).text() !== '' && gameEnd === false) {
    $('#message-area').text('Space Taken, try again.')
  }
}
}

//CODE BELOW for game logic and loop is directly attributable to Aiden Kenney, c. 2020 lol

function myFunction () {
  let isBlankSpace = true
  board.forEach(item => {
    console.log(item)
    if (item === '') isBlankSpace = false
  })
  return isBlankSpace
}

const isGameOver = function (gameBoard) {
  if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] && gameBoard[0] !== '') {
    displayResult(true)
    return true
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] !== '') {
    displayResult(true)
    return true
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] !== '') {
    displayResult(true)
    return true
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] !== '') {
    displayResult(true)
    return true
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] !== '') {
    displayResult(true)
    return true
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] && gameBoard[2] !== '') {
    displayResult(true)
    return true
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] !== '') {
    displayResult(true)
    return true
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && gameBoard[2] !== '') {
    displayResult(true)
    return true
  } else if (myFunction()) {
    displayResult(false)
    return true
  }
  else {
    return false
  }
} // ending brace for isGameOver function

const displayResult = function (winorlose) {
  let gameEndMessage = ''
  if (winorlose === true) {
    gameEndMessage = currentPlayer + ' won!'
  } else {
    gameEndMessage = ' Tie game. no winner.'
  }
  $('#message-area').text(gameEndMessage)
}

const onBeginGame = function () {
  console.log('onBeginGame is hitting!')
  gameEnd = false
  api.beginGame()
    .then(ui.onBeginGameSuccess)
    .catch(ui.onBeginGameFailure)
  $('.box').text('')
  currentPlayer = 'X'
  board = ['', '', '', '', '', '', '', '', '']

  $('#message-area').text(' New Game Has Begun!')
}

module.exports = {
  onNewUser: onNewUser,
  onRegUser: onRegUser,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onBeginGame: onBeginGame,
  onBoxClick: onBoxClick,
  isGameOver: isGameOver,
  onViewGames: onViewGames
}
