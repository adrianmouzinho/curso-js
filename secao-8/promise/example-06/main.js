const name = document.querySelector('#name');
const delay = document.querySelector('#delay');
const btn = document.querySelector('#set-alarm');
const output = document.querySelector('#output');

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) throw new Error('Delay do alarme não pode ser negativo.');

    if (!Number(delay)) throw new Error('Delay deve ser um número.');

    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, Number(delay));
  });
}

btn.addEventListener('click', async () => {
  output.textContent = '';

  try {
    const message = await alarm(name.value, delay.value);
    output.textContent = message;
  } catch (err) {
    console.error(err);
    output.textContent = `Não foi possível setar o alarme: ${err}`;
  }
});