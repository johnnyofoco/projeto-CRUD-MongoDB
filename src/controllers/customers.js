const customersModel = require('../models/customers')
const { crypto } = require('../utils/passwords')

async function add(req, res) {
  const {
    name,
    age,
    email,
    password,
  } = req.body

  const passwordCrypto = await crypto(password)

  const register = new customersModel({
    name, //chave e valor iguais
    age,
    email,
    password: passwordCrypto,
  })
  
  register.save()
  res.send('cadastro realizado!')
}

module.exports = {
  add
}