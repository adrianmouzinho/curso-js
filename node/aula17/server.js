const express = require('express')
const path = require('node:path')
const mongoose = require('mongoose')
const helmet = require('helmet')
const csrf = require('csurf')
require('dotenv').config()

const routes = require('./routes')
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')

const connectionString = process.env.CONNECTION_STRING

const app = express()

mongoose.set('strictQuery', true)
mongoose.connect(connectionString)
  .then(() => {
    app.emit('pronto')
  })
  .catch(e => console.log(e))

  const session = require('express-session')
  const MongoStore = require('connect-mongo')
  const flash = require('connect-flash')
  
  app.use(helmet())
  app.use(express.urlencoded({
    extended: true
  }))
  app.use(express.json())
  app.use(express.static(path.resolve(__dirname, 'public')))

  const sessionOptions = session({
    secret: 'alsdfkaodsilasdds',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    }
  })
  app.use(sessionOptions)
  app.use(flash())

  app.set('views', path.resolve(__dirname, 'src', 'views'))
  app.set('view engine', 'ejs')
  
  app.use(csrf())
  app.use(middlewareGlobal)
  app.use(checkCsrfError)
  app.use(csrfMiddleware)
  app.use(routes)

  app.on('pronto', () => {
    app.listen(3333, () => {
      console.log('Server is running')
    }) 
  })