function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg != 'string') reject(new Error('erro'));

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi('Conexão com banco de dados', aleatorio(1, 4))
  .then(msg => {
    console.log(msg);
    return esperaAi('Buscando dados da base', aleatorio(1, 4));
  })
  .then(msg => {
    console.log(msg);
    return esperaAi(12, aleatorio(1, 4));
  })
  .then(msg => console.log(msg))
  .then(() => console.log('Exibindo os dados na tela'))
  .catch((erro) => console.log('ERRO', erro));

console.log('Isso será exibida antes de qualquer promise');