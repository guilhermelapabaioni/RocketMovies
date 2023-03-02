// REQUIRES
const sqlConnection = require('../database/sqlite/index')
// END REQUIRES

// CLASS UsersController
class UsersController {
  // Method create - responsability for create and validated the informations in database
  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqlConnection()

    // Validando se o usuário está cadastrado através do e-mail
    const checkUserExist = await database.get('SELECT * FROM users WHERE email = (?)', [email])

    if (checkUserExist) {
      return console.log('User already exists!');
    }

    await database.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password])

    return response.json()
  }

  async update(request, response) {
    // Pegando os valores informados no "corpo"
    const { name, email, oldPassword, newPassword } = request.body

    // Pegando o valor informado no parametro
    const { user_id } = request.params

    // Realizando a conexão com o banco de dados.
    const database = await sqlConnection()

    // Buscando o usuário no banco de dados cujo o ID informamos no parametro. 
    const user = await database.get('SELECT * FROM users WHERE id = (?)', [user_id])

    // Validando se o usuário está cadastrado no banco de dados.
    if (!user) {
      return console.log('Usuário não encontrado!');
    }

    // Buscando o usuário no banco de dados atráves do e-mail informado na requisição do "corpo".
    const userWithUpdatedEmail = await database.get('SELECT * FROM users WHERE email = (?)', [email])

    // Validando se o usuário com o e-mail existe e, também se o ID do usuário com o e-mail é o mesmo do usuário com o ID informado no parametro.
    if (userWithUpdatedEmail && userWithUpdatedEmail.id != user.id) {
      return console.log('E-mail em uso.');
    }

    // Inserindo os novos valores no usuário caso existe, caso não exista receberá o mesmo valor.
    user.name = name ?? user.name
    user.email = email ?? user.email

    if (!oldPassword && newPassword) {
      return console.log('Senha antiga não informada!')
    }

    if (oldPassword && !newPassword) {
      return console.log('Nova senha não informada!')
    }

    if (oldPassword && newPassword) {
      if (oldPassword != user.password) {
        return console.log('Senha antiga inválida!');
      }
      user.password = newPassword
    }

    await database.run(`UPDATE users SET name = ?, email = ?, password = ?, updated_at = DATETIME('now') WHERE id = (?)`, [user.name, user.email, user.password, user_id])

    return response.json({ user })
  }
}

module.exports = UsersController
