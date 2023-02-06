fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementos(json));

// axios('pessoas.json')
//   .then(resposta => carregaElementos(resposta.data))

function carregaElementos(json) {
  const tabela = document.createElement('table');
  
  for (const pessoa of json) {
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerText = pessoa.nome;
    tr.appendChild(td);
    
    td = document.createElement('td');
    td.innerText = pessoa.email;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = pessoa.salario;
    tr.appendChild(td);

    tabela.appendChild(tr);
  }

  tabela.style.width = '500px';
  tabela.style.border = '1px solid black';
  document.querySelector('.resultado').appendChild(tabela);
}
