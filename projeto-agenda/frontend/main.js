import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Login from './modules/Login'
import Contato from './modules/Contato'

import './assets/css/style.css'

const login = new Login('.form-login')
const cadastro = new Login('.form-cadastro')

const cadastrarContato = new Contato('.register-contact')
const editarContato = new Contato('.edit-contact')

login.init()
cadastro.init()
cadastrarContato.init()
editarContato.init()