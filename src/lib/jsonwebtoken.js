const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env

function sign(payload = {}) {
  return jwt.sign(payload, 'supersecretword', { expiresIn: '1d' })
}

function verify(token) {
  return jwt.verify(token, 'supersecretword')

}

module.exports = {
  sign,
  verify
}