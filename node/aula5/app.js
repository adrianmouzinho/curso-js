const path = require('node:path')
const escrever = require('./modules/escrever')
const ler = require('./modules/ler')

const caminhoArquivo = path.resolve(__dirname, 'teste.json')

// const pessoas = [
//   {nome: 'Adrian', idade: 19},
//   {nome: 'Maria', idade: 19},
//   {nome: 'Eduardo', idade: 19},
//   {nome: 'Bruna', idade: 19},
// ]
// const json = JSON.stringify(pessoas, '', 2)
// escrever(caminhoArquivo, json)

async function leArquivo(caminho) {
  const dados = await ler(caminho)
  renderizaDados(dados)
}

function renderizaDados(dados) {
  dados = JSON.parse(dados)
  dados.forEach(dado => console.log(dado))
}

leArquivo(caminhoArquivo)