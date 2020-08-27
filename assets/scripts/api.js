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

module.exports = {
  newUser: newUser
}
