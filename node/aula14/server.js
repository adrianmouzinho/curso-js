const express = require('express')
const path = require('node:path')
const mongoose = require('mongoose')
require('dotenv').config()

const routes = require('./routes')
const { middlewareGlobal } = require('./src/middlewares/middleware')

const connectionString = process.env.CONNECTION_STRING

const app = express()

mongoose.set('strictQuery', true)
mongoose.connect(connectionString)
  .then(() => {
    console.log('conectei')
    app.emit('pronto')
  })
  .catch(e => console.log(e))
  
  app.use(express.urlencoded({
    extended: true
  }))
  app.use(express.static(path.resolve(__dirname, 'public')))
  
  app.set('views', path.resolve(__dirname, 'src', 'views'))
  app.set('view engine', 'ejs')
  
  app.use(middlewareGlobal)
  app.use(routes)

  app.on('pronto', () => {
    app.listen(3333, () => {
      console.log('Server is running')
    }) 
  })