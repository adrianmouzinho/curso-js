const { Router } = require('express')
const StudentController = require('../controllers/StudentController.js')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated.js')

const studentsRoutes = Router()

studentsRoutes.post('/students', ensureAuthenticated, new StudentController().store)
studentsRoutes.get('/students', new StudentController().index)
studentsRoutes.get('/students/:id', ensureAuthenticated, new StudentController().show)
studentsRoutes.put('/students/:id', ensureAuthenticated, new StudentController().update)
studentsRoutes.delete('/students/:id', ensureAuthenticated, new StudentController().delete)

module.exports = { studentsRoutes }
