const express = require('express')
const path = require('node:path')
const routes = require('./routes')
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware')

const app = express()

app.use(express.urlencoded({
  extended: true
}))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(middlewareGlobal)
app.use(routes)

app.listen(3333, () => {
  console.log('Server is running')
}) 