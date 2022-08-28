// RETORNO DA FUNÇÃO

// function soma(a, b) {
//   return a + b
// }
// console.log(soma(3, 6))


// function criaPessoa(nome, idade) {
//   return {
//     nome,
//     idade,
//   }
// }
// const pessoa = criaPessoa('Adrian', 34)
// console.log(pessoa)


// function falaFrase(comeco) {
//   function falaResto(resto) {
//     return comeco + ' ' + resto
//   }
//   return falaResto
// }
// const comeco = falaFrase('Ola')
// const frase = comeco('mundo')
// console.log(frase)


function criaMultiplicador(multiplicador) {
  return function(n) {
    return n * multiplicador
  }
}
const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
console.log(duplica(2))
console.log(triplica(4))