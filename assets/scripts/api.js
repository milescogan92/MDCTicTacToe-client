'use strict'

const config = require('./config')
const store = require('./store')

const newUser = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const regUser = function (data) {
  console.log('regUser data is', data)

  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  console.log('changePassword data is', data)

  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const signOut = function () {
  console.log('signOut function hitting')

  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const beginGame = function () {
  console.log('beginGame hitting!')

  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: '{}'
  })
}

const viewGames = function () {
  console.log('viewGames hitting!')

  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: '{}'
  })
}

const updateGame = function (index, value, over) {
  console.log('updateGame hitting!')

  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: over
      }
    }
  })
}

module.exports = {
  newUser: newUser,
  regUser: regUser,
  changePassword: changePassword,
  signOut: signOut,
  beginGame: beginGame,
  viewGames: viewGames,
  updateGame: updateGame
}
