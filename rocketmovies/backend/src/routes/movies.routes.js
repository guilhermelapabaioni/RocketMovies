// REQUIRES
const { Router } = require('express')
const moviesController = require('../controllers/MoviesController')
// END REQUIRES

const moviesRoutes = Router()
const movieController = new moviesController()

moviesRoutes.post('/:user_id', movieController.create)
moviesRoutes.put('/:id', movieController.update)
moviesRoutes.get('/:id', movieController.get)
moviesRoutes.get('/', movieController.index)
moviesRoutes.delete('/:id', movieController.delete)

module.exports = moviesRoutes