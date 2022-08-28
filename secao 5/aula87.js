// FILTER + MAP + REDUCE

// Retorne a soma do dobro dos pares
const numeros = [1, 2, 3, 4, 5, 6];

const resultado = numeros.filter(valor => {
  return valor % 2 === 0;
}).map(valor => {
  return valor * 2;
}).reduce((acumulador, valor) => {
  return acumulador + valor;
});

// const resultado = numeros
//   .filter(valor => valor % 2 === 0)
//   .map(valor => valor * 2)
//   .reduce((acumulador, valor) => acumulador + valor);

console.log(resultado);