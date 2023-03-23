// REQUIRES
const { Router } = require('express');
const usersController = require('../controllers/UsersController')
const UserAvatarController = require('../controllers/UserAvatarController')
const ensureAuth = require('../middleware/ensureAuth')
const uploadConfig = require('../config/upload');
const multer = require('multer');
// END REQUIRES

const usersRoutes = Router()
const userController = new usersController()
const userAvatarController = new UserAvatarController()
const upload = multer(uploadConfig.MULTER)

// Methods CRUD:
usersRoutes.post('/', userController.create)
usersRoutes.put('/', ensureAuth, userController.update)
usersRoutes.patch(
  '/avatar',
  ensureAuth,
  upload.single('avatar'),
  userAvatarController.update
)
// END Methods CRUD

module.exports = usersRoutes