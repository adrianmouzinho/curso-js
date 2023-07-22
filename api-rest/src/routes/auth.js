const { Router } = require('express')
const AuthenticateUserController = require('../controllers/AuthenticateUserController.js')

const authRoutes = Router()

authRoutes.post('/login', new AuthenticateUserController().handle)

module.exports = { authRoutes }
