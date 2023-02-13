const { Router } = require('express')
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')

const route = Router()

route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

route.get('/contatos', contatoController.paginaInicial)

module.exports = route