// REQUIRES
const { Router } = require('express')

const usersRoutes = require('./users.routes')
const sessionsRoutes = require('./sessions.routes')
const moviesRoutes = require('./movies.routes')
const linksRoutes = require('./links.routes')
// END REQUIRES

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/movies', moviesRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/links', linksRoutes)

module.exports = routes
