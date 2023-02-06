class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando.`);
  }

  comer() {
    console.log(`${this.nome} está comendo.`);
  }

  beber() {
    console.log(`${this.nome} está bebendo.`);
  }
}

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
  console.log(`${this.nome} está falando.`);
}

Pessoa2.prototype.comer = function() {
  console.log(`${this.nome} está comendo.`);
}

Pessoa2.prototype.beber = function() {
  console.log(`${this.nome} está bebendo.`);
}

const p1 = new Pessoa('Adrian', 'Mouzinho');
const p2 = new Pessoa2('Willame', 'Mouzinho');
console.log(p1);
console.log(p2);