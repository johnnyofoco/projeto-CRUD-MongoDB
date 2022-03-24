const res = require('express/lib/response')
const customersModel = require('../models/customers')

function add(req, res) {
  const {
    name,
    age,
    email,
    password,
  } = req.body

  const register = new customersModel({
    name,
    age,
    email,
    password,
  })
  
  register.save()
  res.send('cadastro realizado!')
}

module.exports = {
  add
}