const numero = Number(prompt('Digite um número:'));
const mostrarNumero = document.querySelector('#numero');
const texto = document.querySelector('#texto');

mostrarNumero.innerHTML = numero;

texto.innerHTML = `
<p>Raiz quadrada: ${numero ** 0.5}</p>
<p>${numero} é inteiro? ${Number.isInteger(numero)}</p>
<p>${numero} é NaN? ${Number.isNaN(numero)}</p>
<p>Arredondando pra baixo: ${Math.floor(numero)}</p>
<p>Arredondando pra cima: ${Math.ceil(numero)}</p>
<p>Com duas casas decimais: ${numero.toFixed(2)}</p>
`;
