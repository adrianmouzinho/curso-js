// Atribuição via desestruturação (Arrays)

// ...rest, ...spread

// let a = 'a'; // b
// let b = 'b'; // c
// let c = 'c'; // a

// [ a, b, c ] = [ b, c, a ];

// console.log(a, b, c);

// const numeros = [ 1, 2, 3, 4, 5 ];
// const [ um, dois, tres, ...resto ] = numeros;

// console.log(um, dois, tres);
// console.log(resto);

// const numeros = [ 1, 2, 3, 4, 5 ];
// const [ um, , tres, , cinco ] = numeros;

// console.log(um, tres, cinco);

const lista = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// const [,,[sete]] = lista;
const [lista1, lista2, lista3] = lista;
const [sete] = lista3;

console.log(sete);
