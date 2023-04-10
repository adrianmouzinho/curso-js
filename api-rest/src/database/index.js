const Sequelize = require('sequelize')

const dbConfig = require('../config/database.js')

const Student = require('../models/Student.js')
const Image = require('../models/Image.js')
const User = require('../models/User.js')

const models = [User, Student, Image]

const connection = new Sequelize(dbConfig)

models.forEach(model => model.init(connection))
models.forEach(model => model.associate && model.associate(connection.models))
