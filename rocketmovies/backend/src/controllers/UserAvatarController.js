const AppError = require('../utils/AppError')
const DiskStorage = require('../providers/DiskStorage')
const sqlConnection = require('../database/sqlite/index')

class UserAvatarController {
  async update(request, response) {
    const user_id = request.user.id
    const avatarFileName = request.file.filename

    const diskStorage = new DiskStorage()
    const database = await sqlConnection()

    const user = await database.get('SELECT * FROM users WHERE id = (?)', [user_id])

    if (!user) {
      throw new AppError('Something is wrong. Try again later.')
    }

    if (user.avatar) {
      await diskStorage.deleteFile(user.avatar)
    }

    const newAvatar = await diskStorage.saveFile(avatarFileName)
    user.avatar = newAvatar

    await database.run(`UPDATE users SET avatar = ?, updated_at = DATETIME('now') WHERE id = (?)`, [user.avatar, user_id])

    return response.json({ user })
  }
}

module.exports = UserAvatarController;