// MAP - MAPEANDO O ARRAY

// const numeros = [1, 3, 20, 12, 14, 2];
// const numerosDuplicados = numeros.map(valor => {
//   return valor * 2;
// });
// console.log(numerosDuplicados);

const nomes = [
  { nome: 'Adrian', idade: 19 },
  { nome: 'Willame', idade: 19 },
  { nome: 'Rai', idade: 21 },
  { nome: 'Simone', idade: 45 },
  { nome: 'Maria', idade: 12 }
];

// const stringNomes = nomes.map(el => {
//   return el.nome;
// });

// console.log(stringNomes);
// const idades = nomes.map(el => {
//   return { idade: el.idade };
// });
// console.log(idades);

const comId = nomes.map((el, indice) => {
  const novo = {...el};
  novo.id = indice + 1;
  return novo;
});
console.log(comId);
console.log(nomes);