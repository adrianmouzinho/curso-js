const { Router } = require('express')

const AuthenticateUserController = require('./controllers/AuthenticateUserController.js')
const StudentController = require('./controllers/StudentController.js')
const StudentImageController = require('./controllers/StudentImageController.js')
const UserController = require('./controllers/UserController.js')

const ensureAuthenticated = require('./middlewares/ensureAuthenticated.js')

const routes = Router()

routes.post('/login', new AuthenticateUserController().handle)

routes.post('/users', ensureAuthenticated, new UserController().store)
routes.get('/users', ensureAuthenticated, new UserController().index)
// routes.get('/users', ensureAuthenticated, new UserController().show)
routes.put('/users', ensureAuthenticated, new UserController().update)
routes.delete('/users', ensureAuthenticated, new UserController().delete)

routes.post('/students', ensureAuthenticated, new StudentController().store)
routes.get('/students', ensureAuthenticated, new StudentController().index)
routes.get('/students/:id', ensureAuthenticated, new StudentController().show)
routes.put('/students/:id', ensureAuthenticated, new StudentController().update)
routes.delete('/students/:id', ensureAuthenticated, new StudentController().delete)

routes.post('/students/:id/images', ensureAuthenticated, new StudentImageController().store)

module.exports = { routes }
