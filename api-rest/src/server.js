const express = require('express')
const { resolve } = require('path')
require('dotenv/config')

const { routes } = require('./routes.js')
require('./database/index.js')

const app = express()

app.use(express.json())
app.use(express.static(resolve(__dirname, '..', 'uploads')))
app.use(routes)

app.listen(3333, () => {
  console.log('HTTP server running!')
})
