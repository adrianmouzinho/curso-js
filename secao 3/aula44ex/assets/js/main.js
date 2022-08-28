const weight = document.querySelector('#weight').value;
const height = document.querySelector('#height').value;
const btn = document.querySelector('.btn');
const form = document.querySelector('form');

btn.addEventListener('click', (event) => {
  event.preventDefault();

  if (weight === null || height === null) {
    console.log('Erro')
  } else {
    const imc = weight / height**height;
    console.log(imc);
    form.innerHTML += `
    <p class="result">imc = ${imc}</p>
    `
  }

  console.log(weight.value, height.value);

})