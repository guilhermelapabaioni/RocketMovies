// REQUIRES
const { Router } = require('express');
const usersController = require('../controllers/UsersController')
// END REQUIRES

const usersRoutes = Router()
const userController = new usersController()

// Methods CRUD:
usersRoutes.post('/', userController.create)
usersRoutes.put('/:user_id', userController.update)

// END Methods CRUD

module.exports = usersRoutes