// FUNÇÃO DATE

// 1 forma de usar a função
// const hours = 60*60*3*1000;
// const day = 60*60*24*1000;

// const date = new Date(0 + hours); // 01/01/1970 época unix
// console.log(date.toString());

// 2 forma de usar a função
// const date = new Date(2003, 0, 23, 16, 30, 60); // ano, mês, dia, hora, min, seg, miliseg
// console.log(date.toString());

// 3 forma de usar a função - A MAIS COMUM
// const date = new Date('2003-01-23 21:12:46.100');
// console.log('Dia', date.getDate());
// console.log('Mês', date.getMonth() + 1);
// console.log('Ano', date.getFullYear());
// console.log('Hora', date.getHours());
// console.log('Minuto', date.getMinutes());
// console.log('Segundo', date.getSeconds());
// console.log('Milisegundo', date.getMilliseconds());
// console.log('Dia da semana', date.getDay());
// console.log(date.toString());

// console.log(Date.now()); data atual em milisegundos

// função para formatar data
function addZero(num) {
  return num >= 10 ? num : `0${num}`;
}

function formatDate(date) {
  const time = [
    addZero(date.getDate()),
    addZero(date.getMonth()+1),
    addZero(date.getFullYear()),
    addZero(date.getHours()),
    addZero(date.getMinutes()),
    addZero(date.getSeconds())
  ]
  return `${time[0]}/${time[1]}/${time[2]} ${time[3]}:${time[4]}:${time[5]}`;
}

const date = new Date();
const formattedDate = formatDate(date);

console.log(formattedDate);
