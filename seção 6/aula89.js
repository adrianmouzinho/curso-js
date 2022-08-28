// REVISANDO OBJETOS

const pessoa = new Object();
pessoa.nome = 'Adrian'
pessoa.sobrenome = 'Mouzinho'
pessoa.idade = 19
pessoa.fala = function() {
  return `${this.nome} ${this.sobrenome}`
}
pessoa.anoNascimento = function() {
  const data = new Date();
  return data.getFullYear() - this.idade
}

// for (const key in pessoa) {
//   console.log(key)
// }

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeComplemento() {
      return `${nome} ${sobrenome}`
    }
  }
}

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  Object.freeze(this);
}

const p1 = new Pessoa('Maria', 'Silva');
const p2 = new Pessoa('João', 'Silva');
p1.idade = 18;
console.log(p1.idade);
console.log(p2);