// PARAMÊTROS DA FUNÇÃO

// function funcao() {
//   let total = 0
//   for (const argument of arguments) {
//     total += argument
//   }
//   console.log(total)
// }
// funcao(1, 2, 3, 4)


// function funcao(a = 0, b = 0, c = 0) {
//   console.log(a + b + c)
// }
// funcao(1, 2)


// function funcao({ nome, idade }) {
//   console.log(nome, idade)
// }
// const objeto = { nome: 'Adrian', idade: 19 }
// funcao(objeto)


function conta(operador, acumulador, ...numeros) {
  for (const numero of numeros) {
    if(operador == '+') acumulador += numero
    if(operador == '-') acumulador -= numero
    if(operador == '*') acumulador *= numero
    if(operador == '/') acumulador /= numero
  }
  console.log(acumulador)
}
conta('+', 1, 10, 20, 30)