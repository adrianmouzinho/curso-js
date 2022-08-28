// OPERAÇÃO TERNÁRIA

// (condição) ? 'valor para condição verdadeira' : 'valor para condição falsa'

const userPoint = 10000;

// if (user >= 1000) {
//   console.log('usuário VIP');
// } else {
//   console.log('usuário normal');
// }

const userLevel = userPoint >= 1000 ? 'usuário VIP' : 'usuário normal';
console.log(userLevel);

const userColor = 'branco';
const colorDefalut = userColor || 'Preto';
console.log(colorDefalut);
