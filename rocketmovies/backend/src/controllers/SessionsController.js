const AppError = require('../utils/AppError');
const sqlConnection = require("../database/sqlite")
const { compare } = require('bcryptjs')
const authConfig = require('../config/auth')
const { sign } = require('jsonwebtoken')

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body

    const database = await sqlConnection()
    const user = await database.get('SELECT * FROM users WHERE email = (?)', [email])

    if (!user) {
      throw new AppError('E-mail or password incorrect.')
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new AppError('E-mail or password incorrect.')
    }

    const { secret, expiresIn } = authConfig.jwt
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    })

    response.json({ user, token })
  }
}

module.exports = SessionsController
