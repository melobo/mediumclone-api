
const mongoose = require('mongoose')

const {
  DB_USER = 'melobo',
  DB_NAME = 'kodeblog',
  DB_PASSWORD = 'Villegas17',
  DB_HOST = 'sexta-gen-vqx48.mongodb.net'
} = process.env

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

module.exports = mongoose.connect(url, {
  useNewUrlParser: true
})