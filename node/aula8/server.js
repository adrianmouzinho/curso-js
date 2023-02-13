const express = require('express')

const app = express()

app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
    nome do cliente: <input type="text" name="nome" ><br>
    idade do cliente: <input type="number" name="idade" >
    <button>Enviar</button>
  </form>
  `)
})

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.send(req.params)
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send(`O que vc me enviouu foi: ${JSON.stringify(req.body)}`)
})

app.listen(3333, () => console.log('Server is running')) 