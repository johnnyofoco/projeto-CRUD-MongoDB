const mongoose = require('mongoose')

//mongoose.set('userNewUrlParser', true)
//mongoose.set('useUnifiedTopology', true)

function connect() {
  
mongoose.connect(
  'mongodb://localhost:27017/projeto-crud-mongodb?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
)

const db = mongoose.connection

db.once('open', () => {
  console.log('Connected to database!')
})

db.on('error', console.error.bind(console, 'connection error:'))

}

module.exports = {
  connect
}