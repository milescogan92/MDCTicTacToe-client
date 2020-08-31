'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const theEvents = require('./events')

$(() => {
  // your JS code goes here
  $('#new-user-form').on('submit', theEvents.onNewUser)
  $('#reg-user-form').on('submit', theEvents.onRegUser)
  $('#change-password-form').on('submit', theEvents.onChangePassword)
  $('#sign-out-button').on('click', theEvents.onSignOut)
  $('#begin-game-button').on('click', theEvents.onBeginGame)
  $('#box1').on('click', theEvents.onBoxClick)
  $('#box2').on('click', theEvents.onBoxClick)
  $('#box3').on('click', theEvents.onBoxClick)
  $('#box4').on('click', theEvents.onBoxClick)
  $('#box5').on('click', theEvents.onBoxClick)
  $('#box6').on('click', theEvents.onBoxClick)
  $('#box7').on('click', theEvents.onBoxClick)
  $('#box8').on('click', theEvents.onBoxClick)
  $('#box9').on('click', theEvents.onBoxClick)
})
