"use strict";

let promiseCount = 0;

function testPromise() {
  const thisPromiseCount = ++promiseCount;

  const log = document.querySelector('#log');
  log.insertAdjacentHTML('beforeend', `${thisPromiseCount} Iniciado</br>`);

  const p1 = new Promise((resolve, reject) => {
    log.insertAdjacentHTML('beforeend', `${thisPromiseCount} Construtor de promise</br>`);

    setTimeout(() => {
      resolve(thisPromiseCount);
    }, Math.random() * 4000 + 1000);
  });

  p1.then(info => {
    log.insertAdjacentHTML('beforeend', `${thisPromiseCount} Cumprida</br>`);
  }).catch((reason) => {
    console.log(`Manuseie a promise rejeitada (${reason}) aqui.`);
  })

  log.insertAdjacentHTML('beforeend', `${thisPromiseCount} Promise feita</br>`);
}

const btn = document.querySelector('#make-promise');
btn.addEventListener('click', testPromise);