const { Router } = require('express')
const UserController = require('../controllers/UserController.js')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated.js')

const usersRoutes = Router()

usersRoutes.post('/users', new UserController().store)
usersRoutes.get('/users', new UserController().index)
usersRoutes.get('/users/:id', ensureAuthenticated, new UserController().show)
usersRoutes.put('/users', ensureAuthenticated, new UserController().update)
usersRoutes.delete('/users', ensureAuthenticated, new UserController().delete)

module.exports = { usersRoutes }
