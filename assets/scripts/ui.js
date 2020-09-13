'use strict'

const store = require('./store')

const onNewUserSuccess = function (response) {
  $('#message-area').text('Thanks for signing up ' + response.user.email)
  $('#new-user-form').trigger('reset')
  $('#new-user-form').hide()
}

const onNewUserFailure = function (error) {
  console.log('error is', error)
  $('#message-area').text('Sign up failed, try again.')
  $('#new-user-form').trigger('reset')
}

const onRegUserSuccess = function (response) {
  console.log('MDC2 response is', response)
  store.user = response.user
  $('#message-area').text('Thanks for signing in, ' + response.user.email)
  $('#reg-user-form').trigger('reset')
  $('#begin-game-button').show()
  $('#view-games-button').show()
  $('#change-password-form').show()
  $('#sign-out-button').show()
}

const onRegUserFailure = function (error) {
  console.log('error is ', error)
  $('#message-area').text('Sorry, sign in failed. Try again.')
  $('#reg-user-form').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#message-area').text('Password changed successfully!')
  $('#change-password-form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#message-area').text('Error, could not change password.')
  $('#change-password-form').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#sign-out-message').text('Thanks, signed out successfully.')
  $('#sign-out-button').hide()
  $('#change-password-form').hide()
  $('.box').hide()
  $('#view-games-button').hide()
  $('#begin-game-button').hide()
  $('#message-area').hide()
}

const onSignOutFailure = function () {
  $('#message-area').text('Error, could not sign you out. Try again.')
}

const onBeginGameSuccess = function (response) {
  console.log(response, 'onBeginGameSuccess is hitting!')
  $('#message-area').text('Game has begun!')
  store.game = response.game
  $('.box').show()
}

const onBeginGameFailure = function () {
  $('#message-area').text('Error, game has not begun.  Try again.')
}

const onUpdateGameSuccess = function (response) {
  store.game = response.game
  console.log('onUpdateGameSuccess is hitting ' + response)
}

const onUpdateGameFailure = function (error) {
  console.log('onUpdateGameFailure... ' + error)
}

const onViewGamesSuccess = function (response) {
  $('#message-area').text('You have played ' + response.games.length + ' games.')
}

const onViewGamesFailure = function (error) {
  $('#message-area').text('Error.  Could not find games.  Try again.')
}



module.exports = {
  onNewUserSuccess: onNewUserSuccess,
  onNewUserFailure: onNewUserFailure,
  onRegUserSuccess: onRegUserSuccess,
  onRegUserFailure: onRegUserFailure,
  onChangePasswordSuccess: onChangePasswordSuccess,
  onChangePasswordFailure: onChangePasswordFailure,
  onSignOutSuccess: onSignOutSuccess,
  onSignOutFailure: onSignOutFailure,
  onBeginGameSuccess: onBeginGameSuccess,
  onBeginGameFailure: onBeginGameFailure,
  onUpdateGameSuccess: onUpdateGameSuccess,
  onUpdateGameFailure: onUpdateGameFailure,
  onViewGamesSuccess: onViewGamesSuccess,
  onViewGamesFailure: onViewGamesFailure
}
