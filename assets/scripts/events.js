'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')


const onNewUser = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)
  console.log('MDC data from onNewUser is ' + data)

  api.newUser(data)
    .then(ui.onNewUserSuccess)
    .catch(ui.onNewUserFailure)
}

module.exports = {
  onNewUser: onNewUser
}
