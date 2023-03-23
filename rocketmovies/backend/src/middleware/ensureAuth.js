const AppError = require('../utils/AppError')
const { verify } = require('jsonwebtoken')
const authConfig = require('../config/auth')

function ensureAuth(request, response, next) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('Something is wrong, try again later', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret)

    request.user = {
      id: Number(user_id)
    }
    return next()

  } catch {
    throw new AppError('Something is wrong, try again later', 401)
  }
}


module.exports = ensureAuth