// Para experimentar o tratamento de erros, os valores "threshold" causam erros aleatoriamente
const THRESHOLD_A = 8; // pode usar zero 0 para garantir o erro

function tetheredGetNumber(resolve, reject) {
  setTimeout(() => {
    const randomInt = Date.now();
    const value = randomInt % 10;
    if (value < THRESHOLD_A) {
      resolve(value);
    } else {
      reject(`Muito grande: ${value}`);
    }
  }, 2000);
}

function determineParity(value) {
  const isOdd = value % 2 === 1;
  return { value, isOdd };
}

function troubleWithGetNumber(reason) {
  const err = new Error("Problema para obter número", { cause: reason });
  console.error(err);
  throw err;
}

function promiseGetWord(parityInfo) {
  return new Promise((resolve, reject) => {
    const { value, isOdd } = parityInfo;
    if (value >= THRESHOLD_A - 1) {
      reject(`Ainda muito grande: ${value}`);
    } else {
      parityInfo.wordEvenOdd = isOdd ? "ímpar" : "par";
      resolve(parityInfo);
    }
  });
}

new Promise(tetheredGetNumber)
  .then(determineParity, troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log(`Recebido: ${info.value}, ${info.wordEvenOdd}`);
    return info;
  })
  .catch((reason) => {
    if (reason.cause) {
      console.error("Já tinha tratado o erro anteriormente");
    } else {
      console.error(`Problema com promiseGetWord(): ${reason}`);
    }
  })
  .finally((info) => console.log("Tudo pronto"));