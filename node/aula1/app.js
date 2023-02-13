// const mod1 = require('./mod1')
// const falaNome = require('./mod1').falaNome
const { nome, sobrenome, Pessoa } = require('./mod1')
const path = require('path')
const axios = require('axios')

// console.log(nome, sobrenome)

const p1 = new Pessoa('Adrian')
console.log(p1)

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//   .then(response => console.log(response.data))
//   .catch(e => console.log(e))