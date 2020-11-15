const routes = require('express').Router()
const clientesController = require('../controllers/clientesController')
const post = require('./../controllers/post')

routes.get('/clientes', clientesController.get)
routes.post('/clientes', clientesController.post)
routes.delete('/clientes', clientesController.delete)

module.exports = routes