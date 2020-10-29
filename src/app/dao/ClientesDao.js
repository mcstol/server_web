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