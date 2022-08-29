// PROTOTYPE

function Pessoa(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
}
Pessoa.prototype.nomeCompleto = () => `${this.nome} ${this.sobrenome}`

const p1 = new Pessoa('Adrian', 'Mouzinho')
const p2 = new Pessoa('Carol', 'Silva')
const data = new Date()

console.dir(p1)
console.dir(data)