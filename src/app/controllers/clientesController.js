const clientesService = require('../service/clientesService')

exports.get = (req, res) => {
    clientesService.list((err, clientes) => {
        if (err) {
            res.status(500).send(err)
        } else
            res.status(200).json(clientes)
    })
}