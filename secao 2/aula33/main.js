// VALORES PRIMITIVOS E VALORES POR REFERÊNCIA

// Primitivos (imutáveis): string, number, bolean, undefined, null (bigint, symbol)
// Por referência (mutáveis): arrays, objets, functions

const a = {
  nome: 'Adrian',
  idade: 18
};
const b = a;
const c = { ...b }; // faz uma cópia de b
console.log(a, b, c);
a.nome = 'Maria';
console.log(a, b, c);

// let a = [1, 2, 3];
// let b = a; // apontam para o mesmo endereço na memória
// let c = [...b]; // faz uma cópia de b
// console.log(a, b, c);
// a.push(4);
// console.log(a, b, c);
// b.pop();
// console.log(a, b, c);

// let a = 'A';
// let b = a; // Cópia
// console.log(a, b);
// a = 'Outra coisa';
// console.log(a, b);

// let a = 'Adrian';
// a[0] = 'F' // Não altera o valor
// console.log(a[0], a);
