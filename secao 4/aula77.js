// Função construtora (Constructor function)

function Pessoa(nome, idade) {
  // Privado
  const id = 1324
  function metodoInterno() {
    console.log('oi')
  }

  // Público
  this.nome = nome
  this.idade = idade
  this.metodo = () => {
    console.log('Sou um método')
  }
}

const p1 = new Pessoa('Adrian', 19)
const p2 = new Pessoa('Gabi', 23)
console.log(p1.nome)
console.log(p2.nome)