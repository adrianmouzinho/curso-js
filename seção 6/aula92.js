// MÉTODOS ÚTEIS PARA OBJETOS

// Object.assign({}, any) - cria um objeto e copia os valores de any para detro do objeto criado
// Object.getOwnPropertyDescriptor(obj, 'prop') - retorna as configurações de uma propriedade do objeto
// Object.keys(obj) - retorna um array com todas as chaves enumerable
// Object.values(obj) - retorna um array com os valores enumerable das chaves
// Object.values(obj) - retorna um array de arrays com duas posições (0: chave, 1: valor)

const produto = { nome: 'produto', preco: 73, material: 'porcelana' }
// Object.defineProperty(produto, 'nome', {
//   writable: false
// })
// produto.nome = 'outro'
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

// console.log(produto)
// console.log(Object.values(produto))
// console.log(Object.entries(produto))

for(let [ chave, valor ] of Object.entries(produto)) {
  console.log(chave, valor)
}