const clientesDao = require('../dao/ClientesDao')
exports.list = (callback) => {
    clientesDao.list(callback)
}