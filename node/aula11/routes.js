const { Router } = require('express')
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

const route = Router()

route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

route.get('/contatos', contatoController.paginaInicial)

module.exports = route