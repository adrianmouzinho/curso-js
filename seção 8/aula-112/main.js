document.addEventListener('click', (e) => {
  const elemento = e.target;
  const tag = elemento.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(elemento);
  }
});

async function carregaPagina(elemento) {
  const href = elemento.getAttribute('href');

  try {
    const response = await fetch(href);
    if (response.status !== 200) throw new Error('ERROR 404 NOSSO');
    const html = await response.text();
    carregaResultado(html);
  } catch (error) {
    console.error(error);
  }

  // fetch(href)
  //   .then(response => {
  //     if (response.status !== 200) throw new Error('ERROR 404 NOSSO');
  //     return response.text();
  //   })
  //   .then(html => carregaResultado(html))
  //   .catch(error => console.error(error));
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}