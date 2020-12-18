const routes = require('express').Router()
const clientesController = require('../controllers/clientesController')
const post = require('./../controllers/post')

routes.get('/clientes', clientesController.getListClientes)
routes.get('/cliente/:id', clientesController.getCliente)
routes.post('/clientes', clientesController.post)
routes.delete('/clientes/:id', clientesController.delete)
routes.put('/clientes/:id', clientesController.put)

//routes.get('/clientes', clientesController.getListaClientes)
//routes.get('/clientes/:id', clientesController.getCliente)
//routes.post('/clientes', clientesController.createCliente)
//routes.delete('/clientes/:id', clientesController.deleteCliente)
//routes.put('/clientes/:id', clientesController.updateCliente)

module.exports = routes