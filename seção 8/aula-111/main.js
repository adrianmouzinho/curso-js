const request = (obj) => {
  const xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.open(obj.method, obj.url, true);
    xhr.send(null);
  
    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
        return;
      }
  
      reject(xhr.statusText);
    });
  })
}

document.addEventListener('click', (e) => {
  const elemento = e.target;
  const tag = elemento.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(elemento);
  }
})

async function carregaPagina(elemento) {
  const href = elemento.getAttribute('href');

  const objCofig = {
    method: 'GET',
    url: href,
  }

  try {
    const response = await request(objCofig);
    carregaResultado(response);
  } catch (error) {
    console.log(error);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}