const clientesDao = require('../dao/ClientesDao')
exports.list = (callback) => {
    clientesDao.list(callback)
}
exports.insert = (cadastro, callback) => {
    clientesDao.insert(cadastro, callback)

}
exports.delete = (registro, callback) => {
    clientesDao.delete(registro, callback)
}