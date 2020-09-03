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

const onBeginGame = function () {
  event.preventDefault() // extraneous
  console.log('onBeginGame is hitting!')

  api.beginGame()
    .then(ui.onBeginGameSuccess)
    .catch(ui.onBeginGameFailure)
}

let currentPlayer = 'X'
store.currentPlayer = currentPlayer


const onBoxClick = function (event) {

  const clickedCell = event.target

  console.log('onBoxClick is hitting!')
  console.log(clickedCell)

  const clickedCellIndex = $(clickedCell).attr('data-cell-index')

  console.log(clickedCellIndex)

  if ($(`#${event.target.id}`).text() === '') {
    $(`#${event.target.id}`).text(currentPlayer)

    store.game.cells[clickedCellIndex] = currentPlayer


    if (currentPlayer === 'X') {
      currentPlayer = '0'
    } else {
      currentPlayer = 'X'
    }

  } else {
    return
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
