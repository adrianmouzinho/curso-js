const { Router } = require('express')
const UploadController = require('../controllers/UploadController.js')

const uploadRoutes = Router()

uploadRoutes.post('/upload', new UploadController().store)

module.exports = { uploadRoutes }
