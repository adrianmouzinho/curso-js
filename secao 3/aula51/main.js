// Atribuição via desestruturação (objetos)

const usuario = {
  nome: 'Adrian',
  sobrenome: 'Mouzinho',
  idade: 18,
  endereco: {
    rua: 'Santo André',
    numero: 200,
    bairro: 'Pq. Alvorada'
  }
};
// const { nome, sobrenome } = usuario;

// Atribuindo valor padrão
// const { nome = '', idade } = usuario;

// Renomeando propriedades
// const { nome: n , idade } = usuario;


// const { endereco, endereco: { rua, numero } } = usuario;

const { nome, endereco, ...resto } = usuario;
console.log(resto);
