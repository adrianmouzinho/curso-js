// FUNÇÕES FÁBRICA

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    altura,
    peso,
    // getter
    get imc() {
      const indice = peso / (altura ** 2)
      return indice.toFixed(2)
    },
    // getter
    get nomeCompleto() {
      return this.nome + ' ' + this.sobrenome
    },
    // setter
    set nomeCompleto(valor) {
      const vetor = valor.split(' ')
      this.nome = vetor.shift()
      this.sobrenome = vetor.join(' ') 
    },
    fala(assunto) {
      return `${nome} está falando sobre ${assunto}`
    }
  }
}

const p1 = criaPessoa('Adrian', 'Mouzinho', 1.8, 80)
const p2 = criaPessoa('Melissa', 'Silva', 1.7, 50)
// console.log(p1.imc)
// console.log(p2.imc)

// console.log(p1.fala('js'))
// console.log(p2.fala('nodejs'))

console.log(p1.nomeCompleto)
p1.nomeCompleto = 'Willame Mouzinho de Brito'
console.log(p1.nomeCompleto)