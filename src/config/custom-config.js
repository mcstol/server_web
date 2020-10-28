const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())

const routes = require('../app/routes/routes')
app.use('/', routes)

module.exports = app;