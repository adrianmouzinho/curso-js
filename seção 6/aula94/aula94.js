// MANIPULANDO PROTOTYPES

// Object.setPrototypeOf(objeto a ter prototype alterado, prototype que será usado)
// Object.create(prototype, chaves configuradas)

// new Object -> Object.prototype
const objA = {
  chaveA: 'A'
  // __proto__: Object.prototype
}

const objB = {
  chaveB: 'B'
  // __proto__: objA
}

const objC = new Object()
objC.chaveC = 'C'

// Object.setPrototypeOf(objB, objA)
// Object.setPrototypeOf(objC, objB)
// console.log(Object.getPrototypeOf(objB))

function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}

Produto.prototype.desconto = function(valor) {
  this.preco = this.preco - (this.preco * (valor/100))
}

Produto.prototype.aumento = function(valor) {
  this.preco = this.preco + (this.preco * (valor/100))
}

const p1 = new Produto('Camisa', 50)
const p2 = {
  nome: 'Caneca',
  preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype)

const p3 = Object.create(Produto.prototype, {
  nome: {
    value: 'Caneta',
    enumerable: true,
    writable: true,
    configurable: true
  },
  preco: {
    value: 42,
    enumerable: true,
    writable: true,
    configurable: true
  }
})

p3.aumento(10)
console.log(p1)
console.log(p2)
console.log(p3)