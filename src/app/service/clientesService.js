const clientesDao = require('../dao/ClientesDao')
exports.listAllClientes = (callback) => {
    clientesDao.listAllClientes(callback)
}
exports.listCliente = (id, callback) => {
    clientesDao.listCliente(id, callback)
}
exports.insert = (novoCliente, callback) => {
    clientesDao.insert(novoCliente, callback)
}
exports.delete = (id, callback) => {
    clientesDao.delete(id, callback)
}
exports.put = (id, alterRegistro, callback) => {
    clientesDao.put(id, alterRegistro, callback)
        // console.log("atualizou")
}