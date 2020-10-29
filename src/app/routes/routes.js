const routes = require('express').Router()
const clientesController = require('../controllers/clientesController')
const post = require('./../controllers/post')

routes.get('/clientes', clientesController.get)
routes.post('/', post)

module.exports = routes