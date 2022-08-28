// FUNÇÕES (BÁSICO)

let raiz = function (n) {
  return n ** 0.5;
};

raiz = n => {       // arrow function
  return n ** 0.5;
};

raiz = n => n ** 0.5; // arrow function

console.log(raiz(8));

// function soma(x = 1, y = 1) {
//   const resultado = x + y;
//   return resultado;
// }

// const resultado = soma(3, 2);
// console.log(resultado);

// function saudacao(nome) {
//   return `Bom dia ${nome}!`;
// }

// const variavel = saudacao('Adrian');
// console.log(variavel);
