// REQUIRES
const { Router } = require('express')
const moviesController = require('../controllers/MoviesController')
const ensureAuth = require('../middleware/ensureAuth')
// END REQUIRES

const moviesRoutes = Router()
const movieController = new moviesController()

moviesRoutes.use(ensureAuth)

moviesRoutes.post('/', movieController.create)
moviesRoutes.put('/:id', movieController.update)
moviesRoutes.get('/:id', movieController.get)
moviesRoutes.get('/', movieController.index)
moviesRoutes.delete('/:id', movieController.delete)

module.exports = moviesRoutes