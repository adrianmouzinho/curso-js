const { Router } = require('express')

const contatoController = require('./src/controllers/contatoController')
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')

const { loginRequired } = require('./src/middlewares/middleware')

const route = Router()

route.get('/', homeController.paginaInicial)
route.get('/bem-vindo', loginRequired, homeController.paginaBemVindo)

route.get('/login', loginController.paginaLogin)
route.post('/login', loginController.logarUsuario)

route.get('/logout', homeController.paginaSair)

route.get('/register', loginController.paginaCadastro)
route.post('/register', loginController.cadastrarUsuario)

route.get('/contatos/register', loginRequired, contatoController.paginaCadastrarContato)
route.post('/contatos/register', loginRequired, contatoController.cadastrarContato)
route.get('/contatos/edit/:id', loginRequired, contatoController.paginaEditarContato)
route.post('/contatos/edit/:id', loginRequired, contatoController.editarContato)
route.get('/contatos/delete/:id', loginRequired, contatoController.excluirContato)

module.exports = route