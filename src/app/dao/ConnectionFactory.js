const mysql = require('mysql')


const _dbConfig = {
    connectionLimit: 100,
    host: 'localhost',
    user: 'marcelo',
    password: 'santos0l1ve1ra',
    database: 'weblog',
    port: 3306
}
const _pool = mysql.createPool(_dbConfig)
exports.getConnection = (callback) => {
    _pool.getConnection(function(err, connection) {
        if (err) {
            console.log('Error getting mysql_pool connection: ' + err);
            _pool.end(function onEnd(error) {
                if (error) {
                    console.log('Error on finishing pool: ' + error);
                }
                _createPool();
            });
            callback(err);
        } else {
            callback(null, connection);
        }
    })
}