function aleatorio(min = 0, max = 4) {
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

// esperaAi('Fase 1', aleatorio())
//   .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase 2', aleatorio());
//   })
//   .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase 3', aleatorio());
//   })
//   .then(valor => {
//     console.log(valor);
//     return valor;
//   })
//   .then(valor => {
//     console.log('Terminamos na fase', valor);
//   })
//   .catch(erro => console.log(erro));


async function executa() {
  try {
    const fase1 = esperaAi('Fase 1', 2000);
    console.log(fase1);

    setTimeout(() => console.log('Esssa promise estava pendente', fase1), 2100)
  
    const fase2 = await esperaAi('Fase 2', aleatorio());
    console.log(fase2);
  
    const fase3 = await esperaAi('Fase 3', aleatorio());
    console.log(fase3);
  
    console.log('Terminamos na fase :', fase3);
  } catch (erro) {
    console.log(erro);
  }
}
executa();

// Status de uma promise
// pending -> pendente
// fullfilled -> resolvida
// rejected -> rejeitada