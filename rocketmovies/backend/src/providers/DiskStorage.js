const fs = require('fs')
const path = require('path')
const uploadConfig = require('../config/upload')

class DiskStorage {
  // Função para salvar o novo arquivo de imagem fornecida pelo usuário.
  async saveFile(file) {
    await fs.promises.rename(
      path.resolve(uploadConfig.TMP_FOLDER, file),
      path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    )

    return file
  }

  // Função para deletar o arquivo existente de imagem do usuário.
  async deleteFile(file) {
    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file)

    try {
      await fs.promises.stat(filePath)
    } catch {
      return
    }

    await fs.promises.unlink(filePath)
  }
}

module.exports = DiskStorage
