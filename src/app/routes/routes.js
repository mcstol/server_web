const routes = require('express').Router()
const get = require('./../controllers/get')
const post = require('./../controllers/post')

routes.get('/', get)
routes.post('/', post)

module.exports = routes