// REDUCE - REDUZINDO O ARRAY

// 1. Mostrar a somos dos números do array
// 2. Filtrar os valores pares
// 1. Criar um array com os valores duplicados
const numeros = [1, 2, 50, 23, 4, 80, 45];
const soma = numeros.reduce((acumulador, valor, indice, array) => {
  acumulador += valor;
  return acumulador;
}, 0);
console.log(soma);

const pares = numeros.reduce((acumulador, valor, indice, array) => {
  if(valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log(pares);

const duplicados = numeros.reduce((acumulador, valor, indice, array) => {
  acumulador.push(valor * 2);
  return acumulador;
}, []);
console.log(duplicados);

const nomes = [
  { nome: 'Adrian', idade: 19 },
  { nome: 'Willame', idade: 19 },
  { nome: 'Rai', idade: 21 },
  { nome: 'Simone', idade: 45 },
  { nome: 'Maria', idade: 12 }
];