const mongoose = require('mongoose')

// Schemas
const schema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String
})

const Model = mongoose.model('customers', schema)

const register = new Model({
  name: 'Johnny Marlon de Paula',
  age: 32,
  email: 'johnny.marlon.paula@gmail.com',
  password: 1234
})

module.exports = Model