const { insert } = require("../service/clientesService");
const connectionFactory = require("./ConnectionFactory")

exports.listAllClientes = (callback) => {
    connectionFactory.getConnection(function(err, connection) {
        if (err) {
            if (connection)
                connection.release();
            callback(err);
        } else {
            let sql = 'select * from cliente';
            connection.query(sql, function(err, clientes) {
                connection.release();
                if (err) {
                    callback(err);
                } else {
                    callback(err, clientes);
                }
            });
        }
    });
}
exports.listCliente = (id, callback) => {
    connectionFactory.getConnection(function(err, connection) {
        if (err) {
            if (connection)
                connection.release()
            callback(err)
        } else {
            connection.query('select * from cliente where id = ?', [id],
                ((err, cliente) => {
                    connection.release()
                    if (err) {
                        callback(err)
                    } else {
                        callback(err, cliente)
                    }
                }))
        }
    })
}
exports.insert = (novoCliente, callback) => {
    connectionFactory.getConnection(function(err, connection) {
        if (err) {
            if (connection)
                connection.release()
            callback(err)
        } else {
            connection.query('INSERT INTO cliente (email,senha) VALUES(?,?)', [novoCliente.email, novoCliente.senha],
                ((err, insertedrow) => {
                    connection.release()
                    if (err) {
                        callback(err)
                    } else {
                        novoCliente.id = insertedrow.insertId
                        callback(null, novoCliente)
                    }

                    // console.log("Inserido")
                })
            )
        }
    })
}
exports.delete = (id, callback) => {
    connectionFactory.getConnection(function(err, connection) {
        if (err) {
            connection.release()
            callback(err)
        } else {
            connection.query('DELETE FROM cliente WHERE id = ?', [id],
                (err => {
                    connection.release()
                    if (err) {
                        callback(err)
                    } else {
                        callback()
                        console.log("Apagado!")
                    }
                })
            )
        }
    })
}
exports.put = (id, alterRegistro, callback) => {
    connectionFactory.getConnection(function(err, connection) {
        if (err) {
            connection.release()
            callback(err)
        } else {
            connection.query('UPDATE cliente SET email = ?, senha = ? WHERE ID = ?', [alterRegistro.email, alterRegistro.senha, id],
                ((err) => {
                    connection.release()
                    if (err) {
                        callback(err)
                    } else
                        callback()
                }))
        }
    })
}