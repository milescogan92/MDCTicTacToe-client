'use strict'

const store = require('./store')

const onNewUserSuccess = function (response) {
  $('#new-user-message').text('Thanks for signing up ' + response.user.email)
  $('#new-user-form').trigger('reset')
}

const onNewUserFailure = function (error) {
  console.log('error is', error)
  $('#new-user-message').text('Sign up failed, try again.')
  $('#new-user-form').trigger('reset')
}

const onRegUserSuccess = function (response) {
  console.log('MDC2 response is', response)
  store.user = response.user
  $('#reg-user-message').text('Thanks for signing in, ' + response.user.email)
  $('#reg-user-form').trigger('reset')
}

const onRegUserFailure = function (error) {
  console.log('error is ', error)
  $('#reg-user-message').text('Sorry, sign in failed. Try again.')
  $('#reg-user-form').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#change-password-message').text('Password changed successfully!')
  $('#change-password-form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#change-password-message').text('Error, could not change password.')
  $('#change-password-form').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#sign-out-message').text('Thanks, signed out successfully.')
}

const onSignOutFailure = function () {
  $('#sign-out-message').text('Error, could not sign you out. Try again.')
}

const onBeginGameSuccess = function (response) {
  console.log(response, 'onBeginGameSuccess is hitting!')
  $('#begin-game-message').text('Game has begun!')
  store.game = response.game
  console.log(store.game)
}

const onBeginGameFailure = function () {
  $('#begin-game-message').text('Error, game has not begun.  Try again.')
}

const onViewGamesSuccess = function (response) {
}

const onViewGamesFailure = function (error) {
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
  onBeginGameFailure: onBeginGameFailure
}
