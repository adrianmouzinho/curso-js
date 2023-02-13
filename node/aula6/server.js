const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
    nome: <input type="text" name="nome" >
    <button>Enviar</button>
  </form>
  `)
})

app.post('/', (req, res) => {
  res.send('Recebi o form')
})

app.get('/sobre', (req, res) => {
  res.send('Sobre')
})

app.listen(3333, () => console.log('Server is running')) 