const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

// usando template engine
server.set('view engine', 'ejs')

// mudar a localização da pasta "views"
server.set('views', path.join(__dirname, 'views'))

// habilitar arquivos estáticos
server.use(express.static("public"))

// usar o req.body
server.use(express.urlencoded({
    extended: true
}))

// rotas
server.use(routes)
server.listen(3333, () => console.log('Servidor Rodando em: http://localhost:3333'))