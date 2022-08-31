// Object.defineProperty() - getter e setter

function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco
  let estoquePrivado = estoque

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // permite mostrar a chave
    get: () => {
      return estoquePrivado
    },
    set: (valor) => {
      if(typeof valor !== 'number') {
        throw new TypeError('value must be a number')
      }

      estoquePrivado = value
    },
    configurable: false // permite reconfigurar a chave e deletar
  })
}

// const p1 = new Produto('Bola Mikasa', 435, 5)
// p1.estoque = 20
// console.log(p1)
// console.log(p1.estoque)

function criaProduto(nome) {
  return {
    get nome() {
      return nome
    },
    set nome(valor) {
      if(typeof valor !== 'string') {
        throw new TypeError('value must be a string')
      }

      nome = valor
    }
  }
}

const p2 = criaProduto('Notebook')
p2.nome = 'Vaso'
console.log(p2.nome)