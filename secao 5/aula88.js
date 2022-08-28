// FOREACH

const numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach(valor => {
  console.log(valor);
});

let total = 0;
numeros.forEach(valor => {
  total += valor;
});
console.log(total);