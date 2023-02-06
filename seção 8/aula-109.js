function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg != 'string') {
        reject('Cai no erro');
        return;
      }

      resolve(msg.toUpperCase() + ' - passei na promise');
    }, tempo);
  });
}

// const promises = [
  // 'Primeiro valor',
  // esperaAi('Promise 1', aleatorio(1, 4)),
  // esperaAi('Promise 2', aleatorio(1, 4)),
  // esperaAi('Promise 3', aleatorio(1, 4)),
  // esperaAi(1000, aleatorio(1, 4)),
  // 'Outro valor'
// ];

// Retorna uma array com o retorno da promises se nenhum erro foi encontrado. Caso contrário, retorna a promise que deu erro
// Promise.all(promises).then(valor => {
//   console.log(valor);
// })
// .catch(erro => {
//   console.log(erro);
// });

// Retorna a primeira promise resolvida se nenhum erro foi encontrado. Caso contrário, retorna a promise que deu erro
// Promise.race(promises)
// .then(valor => {
//   console.log(valor);
// })
// .catch(erro => {
//   console.log(erro);
// });


// Promise.resolve() retorna uma promise resolvida
// Promise.reject() retorna uma promise rejeitada
function baixaPagina() {
  const emCache = false;

  if (emCache) {
    return Promise.reject('Página em cache');
  } else {
    return esperaAi('Baixei a página', 3000);
  }
}

baixaPagina()
  .then(dados => {
    console.log(dados);
  })
  .catch(erro => {
    console.log('ERRO', erro);
  });