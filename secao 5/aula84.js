// FILTRANDO ARRAY

// const numeros = [1, 3, 20, 12, 14, 2];
// const filtrados = numeros.filter(valor => {
//   return valor >= 10;
// });

const nomes = [
  { nome: 'Adrian', idade: 19 },
  { nome: 'Willame', idade: 19 },
  { nome: 'Rai', idade: 21 },
  { nome: 'Simone', idade: 45 },
  { nome: 'Maria', idade: 12 }
];
// const filtrados = nomes.filter(el => {
//   return el.nome.length > 5;
// });
const filtrados = nomes.filter(el => {
  return el.idade <= 18;
});

console.log(filtrados);