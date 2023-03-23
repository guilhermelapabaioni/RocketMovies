const { Router } = require('express')
const LinksController = require('../controllers/LinksController')
const ensureAuth = require('../middleware/ensureAuth')

const linksRoutes = Router()
const linksController = new LinksController()

linksRoutes.use('/', ensureAuth, linksController.index)

module.exports = linksRoutes