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


  console.log('onBoxClick is hitting!')

  const clickedCellIndex = $(event.target).attr('data-cell-index')

  console.log(clickedCellIndex)

  if ($(event.target).text() === '') {
    $(event.target).text(currentPlayer)

    board[clickedCellIndex] = currentPlayer
    console.log(board)

    if (currentPlayer === 'X') {
      currentPlayer = '0'
    } else {
      currentPlayer = 'X'
    }
  }
}



module.exports = {
  onNewUser: onNewUser,
  onRegUser: onRegUser,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onBeginGame: onBeginGame,
  onBoxClick: onBoxClick
}
