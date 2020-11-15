const clientesService = require('../service/clientesService')

exports.get = (req, res) => {
    clientesService.list((err, clientes) => {
        if (err) {
            res.status(500).send(err)
        } else
            res.status(200).json(clientes)
    })
}
exports.post = (req, res) => {
    clientesService.insert(req.body)
    res.status(200).send('OK ')
        // console.log(req.body)
}
exports.delete = (req, res) => {
    clientesService.delete(req.body)
    res.status(200).send(req.body)
        //console.log(req.body)
}