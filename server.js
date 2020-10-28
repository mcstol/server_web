const app = require('./src/config/custom-config')
const { routes } = require('./src/config/custom-config')

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})