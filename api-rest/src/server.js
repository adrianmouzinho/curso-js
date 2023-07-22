require('dotenv/config')
const { resolve } = require('node:path')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const sequelize = require('./config/database.js')
const { uploadRoutes } = require('./routes/upload.js')
const { usersRoutes } = require('./routes/users.js')
const { studentsRoutes } = require('./routes/students.js')
const { authRoutes } = require('./routes/auth.js')

const port = Number(process.env.APP_PORT) ?? 3333

const app = express()

sequelize.sync()
  .then(() => {
    console.log('Connection has been established successfully.')

    app.use(cors())
    app.use(helmet())
    app.use(express.json())
    app.use('/uploads', express.static(resolve(__dirname, '..', 'uploads')))
    app.use(uploadRoutes)
    app.use(authRoutes)
    app.use(usersRoutes)
    app.use(studentsRoutes)

    app.listen(port, () => {
      console.log('HTTP server running!')
    })
  })
  .catch((error) => console.error('Unable to connect to the database:', error))
