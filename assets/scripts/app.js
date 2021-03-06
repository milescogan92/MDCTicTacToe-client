'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const theEvents = require('./events')

$(() => {
  // your JS code goes here
  $('#sign-out-button').hide()
  $('#change-password-form').hide()
  $('#begin-game-button').hide()
  $('#view-games-button').hide()
  $('.box').hide()
  $('#new-user-form').on('submit', theEvents.onNewUser)
  $('#reg-user-form').on('submit', theEvents.onRegUser)
  $('#change-password-form').on('submit', theEvents.onChangePassword)
  $('#sign-out-button').on('click', theEvents.onSignOut)
  $('#begin-game-button').on('click', theEvents.onBeginGame)
  $('#view-games-button').on('click', theEvents.onViewGames)
  $('.box').on('click', theEvents.onBoxClick)
})
