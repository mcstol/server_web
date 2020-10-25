const app = require('./src/config/custom-config')
const cors = require('cors')
const bodyParser = require('body-parser')
const { routes } = require('./src/config/custom-config')

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})