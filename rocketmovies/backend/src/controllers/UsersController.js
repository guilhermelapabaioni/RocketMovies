// REQUIRES
const sqlConnection = require('../database/sqlite/index')
const AppError = require('../utils/AppError')
const { hash, compare } = require('bcryptjs')
// END REQUIRES
const regexValidator = new RegExp(
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,}).+$/
)
// CLASS UsersController
class UsersController {
  // Method create - responsability for create and validated the informations in database
  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqlConnection()

    // Validando se o usuário está cadastrado através do e-mail
    const checkUserExist = await database.get('SELECT * FROM users WHERE email = (?)', [email])

    if (checkUserExist) {
      throw new AppError('User already exists.')
    }

    if (!name || name == '') {
      throw new AppError('Please enter your name.')
    }

    if (password.length < 8) {
      throw new AppError('Password need to be at least 8 characters, one number and one special character.')
    }
    // } else if (!specialCharacters.exec(password)) {
    //   throw new AppError('Password need to be at least 8 characters, one number and one special character.')
    // }

    const hashedPassword = await hash(password, 8)

    await database.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword])

    return response.json()
  }

  async update(request, response) {
    // Pegando os valores informados no "corpo"
    const { name, email, oldPassword, newPassword } = request.body

    // Pegando o valor informado no parametro
    const user_id = request.user.id
    
    // Realizando a conexão com o banco de dados.
    const database = await sqlConnection()

    // Buscando o usuário no banco de dados cujo o ID informamos no parametro. 
    const user = await database.get('SELECT * FROM users WHERE id = (?)', [user_id])

    // Validando se o usuário está cadastrado no banco de dados.
    if (!user) {
      throw new AppError('User not exists')
    }

    // Buscando o usuário no banco de dados atráves do e-mail informado na requisição do "corpo".
    const userWithUpdatedEmail = await database.get('SELECT * FROM users WHERE email = (?)', [email])

    // Validando se o usuário com o e-mail existe e, também se o ID do usuário com o e-mail é o mesmo do usuário com o ID informado no parametro.
    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError('E-mail already used.')
    }

    if (!name) {
      user.name = user.name
    } else {
      user.name = name
    }

    if (!email) {
      user.email = user.email
    } else {
      user.email = email
    }

    if (oldPassword || newPassword) {
      if (!oldPassword && newPassword) {
        throw new AppError('Please insert your old password.')
      }

      if (oldPassword && !newPassword) {
        throw new AppError('New password not informed.')
      }

      if (oldPassword && newPassword.length < 8) {
        throw new AppError('Password must be 8 or more characters, one number and one special character.')
      } else if (!regexValidator.exec(newPassword)) {
        console.log(regexValidator.exec(newPassword));
        throw new AppError('Password must be 8 or more characters, one number and one special character.')
      }

      if (oldPassword && newPassword) {
        const checkOldPassword = await compare(oldPassword, user.password)
        if (!checkOldPassword) {
          throw new AppError('Senha antiga inválida.')
        }
        user.password = await hash(newPassword, 8)
      }
    }


    await database.run(`UPDATE users SET name = ?, email = ?, password = ?, updated_at = DATETIME('now') WHERE id = (?)`, [user.name, user.email, user.password, user_id])

    return response.json({ user })
  }
}

module.exports = UsersController
