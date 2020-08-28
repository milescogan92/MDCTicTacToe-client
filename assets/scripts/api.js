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

module.exports = {
  newUser: newUser,
  regUser: regUser
}
