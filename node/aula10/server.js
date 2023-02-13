const express = require('express')
const path = require('node:path')
const routes = require('./routes')

const app = express()

app.use(express.urlencoded({
  extended: true
}))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)

app.listen(3333, () => {
  console.log('Server is running')
}) 