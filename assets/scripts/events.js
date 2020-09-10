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

const onBeginGame = function (token) {
  event.preventDefault() // extraneous
  console.log('onBeginGame is hitting!')
  //gameOver = false - //took this line from Aidan, should work for me. but doesnt
  //board = ['', '', '', '', '', '', '', '', ''] - //same as above line
  api.beginGame() //added store.user.token on 9/5/2020 in this.
    .then(ui.onBeginGameSuccess)
    .catch(ui.onBeginGameFailure)
}

const onViewGames = function () {
  event.preventDefault()
  console.log('onViewGames is hitting!')

  api.viewGames()
    .then(ui.onViewGamesSuccess)
    .catch(ui.onViewGamesFailure)
}

let currentPlayer = 'X'
store.currentPlayer = currentPlayer
//let gameOver = false //added from Aidan's code
let board = ['', '', '', '', '', '', '', '', '']
//let gameOver = false - this line caused errors
const onBoxClick = function (event) {
let gameEnd = isGameOver(board)
let target = $(event.target)

if (gameEnd) {
  return
} else {
  const clickedCellIndex = target.attr('data-cell-index')

  if (target.text() === '') {
    target.text(currentPlayer)

    board[clickedCellIndex] = currentPlayer

    api.updateGame(clickedCellIndex, currentPlayer, isGameOver(board))
      .then(ui.onUpdateGameSuccess)
      .catch(ui.onUpdateGameFailure)

    if (currentPlayer === 'X') {
      currentPlayer = '0'
    } else {
      currentPlayer = 'X'
    }
  }

  else if ($(event.target).text() !== '' && gameEnd === false) {
    $('#wrong-move-msg').text('Nice Move idiot')
  }
}
}


//CODE BELOW for game logic and loop is directly attributable to Aiden Kenney, c. 2020 lol



const isGameOver = function (gameBoard) {
  if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] && gameBoard[0] !== '') {
    return true
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] !== '') {
    return true
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] !== '') {
    return true
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] !== '') {
    return true
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] !== '') {
    return true
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] && gameBoard[2] !== '') {
    return true
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] !== '') {
    return true
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && gameBoard[2] !== '') {
    return true
  } else {
    return false
  }
}

module.exports = {
  onNewUser: onNewUser,
  onRegUser: onRegUser,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onBeginGame: onBeginGame,
  onBoxClick: onBoxClick,
  isGameOver: isGameOver
}
