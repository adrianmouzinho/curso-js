// OBJETOS (BÁSICO)

const pessoa01 = {
  nome: 'Adrian',
  sobrenome: 'Mouzinho',
  idade: 18,
  fala() {
    // console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    console.log(`Minha atual ${this.idade}...`);
  },
  somaIdade() {
    this.idade++;
  }
};

pessoa01.fala();
pessoa01.somaIdade();
pessoa01.fala();
pessoa01.somaIdade();
pessoa01.fala();
pessoa01.somaIdade();
pessoa01.fala();

// function criaPessoa(nome, sobrenome, idade) {
//   return {
//     nome: nome,
//     sobrenome: sobrenome,
//     idade: idade
//   };
// }

// const pessoa1 = criaPessoa('Adrian', 'Mouzinho', 18);
// const pessoa2 = criaPessoa('Maria', 'Silva', 23);
// console.log(pessoa1.nome);
// console.log(pessoa2.nome);

// const pessoa01 = {
//   nome: 'Adrian',
//   sobrenome: 'Mouzinho',
//   idade: 1
// };

// console.log(pessoa01.nome, pessoa01.sobrenome);

// const nome01 = 'Adrian';
// const sobrenome01 = 'Mouzinho';
// const idade01 = 1;
