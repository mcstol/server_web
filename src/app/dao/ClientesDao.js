const { insert } = require("../service/clientesService");
const connectionFactory = require("./ConnectionFactory")

exports.list = (callback) => {
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
exports.insert = (cadastro, callback) => {
    connectionFactory.getConnection(function(err, connection) {
        if (err) {
            if (connection)
                connection.release()
            callback(err)
        } else {
            connection.query('INSERT INTO cliente (email,senha) VALUES(?,?)', [cadastro.email, cadastro.senha],
                (err, clientes => {
                    connection.release()
                    if (err) {
                        callback(err)
                    } else
                    // callback(clientes)
                        console.log("Inserido")
                })
            )
        }
    })
}
exports.delete = (registro, callback) => {
    connectionFactory.getConnection(function(err, connection) {
        if (err) {
            connection.release()
            callback(err)
        } else {
            connection.query('DELETE FROM cliente WHERE id = ?', [registro.id],
                (err => {
                    connection.release()
                    if (err) {
                        callback(err)
                    } else {
                        console.log("Apagado!")
                    }
                })
            )
        }
    })
}