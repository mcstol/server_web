const app = require('./src/config/custom-config')
const cors = require('cors')
const bodyParser = require('body-parser')

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})