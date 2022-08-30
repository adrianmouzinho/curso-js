// Object.defineProperty() AND Object.defineProperties()

function Produto(nome, preco, estoque) {

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // permite mostrar a chave
    value: estoque, // setta o valor
    writable: true, // permite alterar o valor
    configurable: false // permite reconfigurar a chave e deletar
  })

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true
    }
  })
}

const p1 = new Produto('Camisa', 35, 5)
console.log(Object.keys(p1)) // Object.keys(p1) retorna um array com as chaves enumerable

for(let chave in p1) {
  console.log(chave)
}

console.log(p1)